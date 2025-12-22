import { characterClasses, classBuilds } from './data.js';

const dashboardSection = document.getElementById('dashboard-section');
const createCharacterSection = document.getElementById('create-character-section');
const viewCharacterSection = document.getElementById('view-character-section');
const charactersList = document.getElementById('characters-list');
const buildOptions = document.getElementById('build-options');
const buildButtonsContainer = document.getElementById('build-buttons');
const characterStats = document.getElementById('character-stats');
const characterDetails = document.getElementById('character-details');
const toast = document.getElementById('toast');

let characters = [];
let selectedCharacterId = null;

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function navigateTo(section) {
    [dashboardSection, createCharacterSection, viewCharacterSection].forEach(s => {
        s.classList.add('hidden');
    });
    section.classList.remove('hidden');
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function calculateModifier(value) {
    const val = parseInt(value) || 10;
    return Math.floor((val - 10) / 2);
}

function formatModifier(mod) {
    return mod >= 0 ? `+${mod}` : mod.toString();
}

function statNameToDisplay(stat) {
    const statNames = {
        vigor: 'Vigor', mente: 'Mente', fortitude: 'Fortitude', forca: 'Força',
        destreza: 'Destreza', inteligencia: 'Inteligência', fe: 'Fé', arcano: 'Arcano'
    };
    return statNames[stat] || stat;
}

function loadCharacters() {
    clearElement(charactersList);
    characters = JSON.parse(localStorage.getItem('characters') || '[]');

    if (characters.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-characters';
        emptyMessage.innerHTML = `
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text" style="margin: 0 auto; color: #fcd34d50; margin-bottom: 1rem;">
                    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
                    <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                    <path d="M15 8h-5"></path>
                    <path d="M15 12h-5"></path>
                </svg>
                <p class="text-lg">Você ainda não tem personagens</p>
                <p class="text-sm" style="opacity: 0.7; margin-top: 0.5rem;">Crie seu primeiro personagem para começar sua aventura</p>
            </div>
        `;
        charactersList.appendChild(emptyMessage);
        return;
    }

    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        const nameHeader = document.createElement('h3');
        nameHeader.textContent = char.name;

        card.appendChild(nameHeader);
        
        card.insertAdjacentHTML('beforeend', `
            <div class="character-info"><span>Classe:</span> ${char.class}</div>
            <div class="character-info"><span>Raça:</span> ${char.race}</div>
            <div class="character-info"><span>Idade:</span> ${char.age}</div>
            ${char.build ? `<div class="character-info"><span>Build:</span> ${char.build}</div>` : ''}
            ${char.equipment && char.equipment.length > 0 ? `<div class="character-extra">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sword" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
                    <polyline points="14.5 17.5 3 6 6 3 17.5 14.5"></polyline>
                    <line x1="13" y1="19" x2="19" y2="13"></line>
                </svg>
                ${char.equipment.slice(0, 2).join(', ')}${char.equipment.length > 2 ? '...' : ''}
            </div>` : ''}
            <div class="character-extra" style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${new Date(char.createdAt).toLocaleDateString()}
                </div>
                <span class="character-badge">Nível 1</span>
            </div>
        `);

        card.addEventListener('click', () => {
            viewCharacter(char.id);
        });

        charactersList.appendChild(card);
    });
}

function handleClassChange() {
    const selectedClass = document.getElementById('character-class').value;
    
    clearElement(buildButtonsContainer);
    document.getElementById('character-build').value = '';

    if (selectedClass && classBuilds[selectedClass]) {
        buildOptions.classList.remove('hidden');

        classBuilds[selectedClass].forEach((build, index) => {
            const buildBtn = document.createElement('button');
            buildBtn.type = 'button';
            buildBtn.className = 'btn build-btn';
            buildBtn.dataset.buildIndex = index;
            buildBtn.innerHTML = `
                <span class="build-btn-title">${build.name}</span>
                <div class="build-btn-description">${build.description}</div>
            `;
            
            buildBtn.addEventListener('click', () => {
                document.querySelectorAll('.build-btn').forEach(btn => btn.classList.remove('selected'));
                buildBtn.classList.add('selected');
                document.getElementById('character-build').value = index;
                updateCharacterPreview(selectedClass, index);
            });
            
            buildButtonsContainer.appendChild(buildBtn);
        });
        
        updateCharacterPreview(selectedClass);
    } else {
        buildOptions.classList.add('hidden');
        clearElement(characterStats);
    }
}

function updateCharacterPreview(className, buildIndex = null) {
    const classData = characterClasses.find(c => c.nome === className);

    if (!classData) {
        clearElement(characterStats);
        return;
    }
    
    clearElement(characterStats);
    const baseStats = { ...classData.baseStats };

    if (buildIndex !== null && classBuilds[className] && classBuilds[className][buildIndex]) {
        const build = classBuilds[className][buildIndex];
        Object.entries(build.statChanges).forEach(([stat, value]) => {
            baseStats[stat] = value;
        });
    }

    Object.entries(baseStats).forEach(([stat, value]) => {
        const statBox = document.createElement('div');
        statBox.className = 'stat-box';
        statBox.innerHTML = `
            <span class="stat-name">${statNameToDisplay(stat)}</span>
            <span class="stat-value">${value}</span>
            <span class="stat-modifier">${formatModifier(calculateModifier(value))}</span>
        `;
        characterStats.appendChild(statBox);
    });
}

function handleCharacterFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('character-name').value;
    const age = document.getElementById('character-age').value;
    const race = document.getElementById('character-race').value;
    const sex = document.getElementById('character-sex').value;
    const characterClass = document.getElementById('character-class').value;
    const buildIndex = document.getElementById('character-build').value;
    
    const classData = characterClasses.find(c => c.nome === characterClass);

    if (!classData) {
        showToast('Classe de personagem inválida!', 'error');
        return;
    }

    const character = {
        id: generateId(),
        name,
        age,
        race,
        sex,
        class: characterClass,
        stats: { ...classData.baseStats },
        equipment: [...classData.equipment],
        clothes: [...classData.clothes],
        build: '',
        createdAt: new Date().toISOString()
    };

    if (buildIndex !== '') {
        const buildData = classBuilds[characterClass][parseInt(buildIndex)];
        character.build = buildData.name;
        Object.entries(buildData.statChanges).forEach(([stat, value]) => {
            character.stats[stat] = value;
        });
        if (buildData.equipment) character.equipment.push(...buildData.equipment);
        if (buildData.clothes) character.clothes.push(...buildData.clothes);
    }

    const allCharacters = JSON.parse(localStorage.getItem('characters') || '[]');
    allCharacters.push(character);
    localStorage.setItem('characters', JSON.stringify(allCharacters));

    showToast('Personagem criado com sucesso!');
    document.getElementById('character-form').reset();
    clearElement(buildButtonsContainer);
    clearElement(characterStats);
    buildOptions.classList.add('hidden');
    loadCharacters();
    navigateTo(dashboardSection);
}

function viewCharacter(id) {
    selectedCharacterId = id;
    const character = characters.find(char => char.id === id);
    
    if (!character) {
        showToast('Personagem não encontrado!', 'error');
        return;
    }

    document.getElementById('character-view-title').textContent = character.name;
    clearElement(characterDetails);

    characterDetails.innerHTML = `
        <div class="detail-group">
            <h4>Informações Básicas</h4>
            <div class="detail-grid">
                <div class="detail-item">Classe: ${character.class}</div>
                <div class="detail-item">Raça: ${character.race}</div>
                <div class="detail-item">Sexo: ${character.sex}</div>
                <div class="detail-item">Idade: ${character.age}</div>
                ${character.build ? `<div class="detail-item">Build: ${character.build}</div>` : ''}
            </div>
        </div>
        
        <div class="detail-group">
            <h4>Atributos</h4>
            <div class="stats-grid">
                ${Object.entries(character.stats).map(([stat, value]) => `
                    <div class="stat-box">
                        <span class="stat-name">${statNameToDisplay(stat)}</span>
                        <span class="stat-value">${value}</span>
                        <span class="stat-modifier">${formatModifier(calculateModifier(value))}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        ${character.equipment?.length ? `
        <div class="detail-group">
            <h4>Equipamento</h4>
            <div class="detail-grid">
                ${character.equipment.map(item => `<div class="detail-item">${item}</div>`).join('')}
            </div>
        </div>` : ''}

        ${character.clothes?.length ? `
        <div class="detail-group">
            <h4>Vestimentas</h4>
            <div class="detail-grid">
                ${character.clothes.map(item => `<div class="detail-item">${item}</div>`).join('')}
            </div>
        </div>` : ''}
        
        <div class="detail-group">
            <div style="color: var(--muted-foreground); font-size: 0.875rem; display: flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll" style="margin-right: 0.5rem;">
                    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
                    <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                </svg>
                Criado em: ${new Date(character.createdAt).toLocaleString()}
            </div>
        </div>
    `;

    navigateTo(viewCharacterSection);
}

function handleDeleteCharacter() {
    const modal = document.getElementById('delete-modal');
    modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-character-btn').addEventListener('click', () => navigateTo(createCharacterSection));
    document.getElementById('character-class').addEventListener('change', handleClassChange);
    document.getElementById('character-form').addEventListener('submit', handleCharacterFormSubmit);
    document.getElementById('back-btn').addEventListener('click', () => navigateTo(dashboardSection));
    document.getElementById('view-back-btn').addEventListener('click', () => navigateTo(dashboardSection));
    document.getElementById('delete-character-btn').addEventListener('click', handleDeleteCharacter);
    
    const modal = document.getElementById('delete-modal');
    document.getElementById('modal-cancel').addEventListener('click', () => modal.classList.add('hidden'));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    document.getElementById('modal-confirm').addEventListener('click', () => {
        const allCharacters = JSON.parse(localStorage.getItem('characters') || []);
        const updatedCharacters = allCharacters.filter(char => char.id !== selectedCharacterId);
        localStorage.setItem('characters', JSON.stringify(updatedCharacters));

        showToast('Personagem excluído com sucesso!');
        modal.classList.add('hidden');
        loadCharacters();
        navigateTo(dashboardSection);
        selectedCharacterId = null;
    });

    loadCharacters();
});