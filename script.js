// Classes de personagens com atributos base e equipamentos
let characterClasses = [
    {
        nome: "Heroi",
        baseStats: {
            vigor: 14,
            mente: 9,
            fortitude: 12,
            forca: 16,
            destreza: 9,
            inteligencia: 7,
            fe: 8,
            arcano: 11,
        },
        equipment: ["Machado de batalha", "Escudo de couro"],
        clothes: [],
    },
    {
        nome: "Bandido",
        baseStats: {
            vigor: 10,
            mente: 11,
            fortitude: 10,
            forca: 9,
            destreza: 13,
            inteligencia: 9,
            fe: 8,
            arcano: 14,
        },
        equipment: ["Adaga", "Arco curto"],
        clothes: ["Capuz de couro"],
    },
    {
        nome: "Astrologo",
        baseStats: {
            vigor: 9,
            mente: 15,
            fortitude: 8,
            forca: 8,
            destreza: 12,
            inteligencia: 16,
            fe: 7,
            arcano: 16,
        },
        equipment: ["Cajado", "Grimório"],
        clothes: ["Túnica estrelada"],
    },
    {
        nome: "Guerreiro",
        baseStats: {
            vigor: 15,
            mente: 10,
            fortitude: 14,
            forca: 16,
            destreza: 12,
            inteligencia: 8,
            fe: 9,
            arcano: 7,
        },
        equipment: ["Espada longa", "Escudo de metal"],
        clothes: ["Armadura de placas"],
    },
    {
        nome: "Prisioneiro",
        baseStats: {
            vigor: 11,
            mente: 12,
            fortitude: 11,
            forca: 11,
            destreza: 14,
            inteligencia: 14,
            fe: 6,
            arcano: 9,
        },
        equipment: ["Estoque", "Correntes"],
        clothes: ["Trapos de prisioneiro"],
    },
    {
        nome: "Confessor",
        baseStats: {
            vigor: 10,
            mente: 13,
            fortitude: 10,
            forca: 10,
            destreza: 12,
            inteligencia: 13,
            fe: 16,
            arcano: 9,
        },
        equipment: ["Maça", "Tomo sagrado"],
        clothes: ["Vestes clericais"],
    },
    {
        nome: "Miseravel",
        baseStats: {
            vigor: 10,
            mente: 10,
            fortitude: 10,
            forca: 10,
            destreza: 10,
            inteligencia: 10,
            fe: 10,
            arcano: 10,
        },
        equipment: ["Porrete"],
        clothes: ["Trapos"],
    },
    {
        nome: "Vagabundo",
        baseStats: {
            vigor: 11,
            mente: 10,
            fortitude: 10,
            forca: 10,
            destreza: 13,
            inteligencia: 9,
            fe: 14,
            arcano: 7,
        },
        equipment: ["Adaga", "Escudo pequeno"],
        clothes: ["Vestes simples"],
    },
    {
        nome: "Profeta",
        baseStats: {
            vigor: 10,
            mente: 14,
            fortitude: 8,
            forca: 11,
            destreza: 10,
            inteligencia: 7,
            fe: 16,
            arcano: 10,
        },
        equipment: ["Lança", "Talismã"],
        clothes: ["Túnica de oráculo"],
    },
    {
        nome: "Samurai",
        baseStats: {
            vigor: 12,
            mente: 11,
            fortitude: 13,
            forca: 15,
            destreza: 15,
            inteligencia: 9,
            fe: 8,
            arcano: 8,
        },
        equipment: ["Katana", "Arco longo"],
        clothes: ["Armadura de samurai"],
    }
];

// Builds disponíveis para cada classe
const classBuilds = {
    Heroi: [
        {
            name: "Força do Destino",
            description: "Build focado em alta força e vigor, ideal para combates diretos.",
            statChanges: { forca: 20, vigor: 18, fortitude: 15 },
            equipment: ["Espada Lendária"],
            clothes: ["Armadura de Cavaleiro"]
        },
        {
            name: "Espírito Indomável",
            description: "Combina força brutal com agilidade para ataques rápidos e certeiros.",
            statChanges: { forca: 18, destreza: 16, vigor: 14 },
            equipment: ["Machado de Guerra"],
            clothes: ["Cota de Malha Real"]
        },
        {
            name: "Herói Ancestral",
            description: "Foco em combate corpo a corpo com ênfase na resistência e no dano físico.",
            statChanges: { forca: 22, vigor: 16, fortitude: 14 },
            equipment: ["Martelo de Guerra"],
            clothes: ["Túnica do Herói"]
        }
    ],
    Bandido: [
        {
            name: "Sombra Ardilosa",
            description: "Especialista em furtividade e ataques surpresa, explorando brechas inimigas.",
            statChanges: { destreza: 20, arcano: 12, vigor: 10 },
            equipment: ["Adaga Silenciosa"],
            clothes: ["Manto das Sombras"]
        },
        {
            name: "Lâmina Veloz",
            description: "Build com foco em velocidade e precisão, perfeita para golpes rápidos.",
            statChanges: { destreza: 18, mente: 16, vigor: 12 },
            equipment: ["Espada Curta"],
            clothes: ["Vestimentas Leves"]
        },
        {
            name: "Golpe Furtivo",
            description: "Aproveita ataques críticos e golpes de para eliminar o oponente.",
            statChanges: { destreza: 19, arcano: 14, vigor: 11 },
            equipment: ["Punhal de Assassino"],
            clothes: ["Capuz do Ladrão"]
        }
    ],
    Astrologo: [
        {
            name: "Visão Estelar",
            description: "Concentra-se em inteligência e mente para conjurar feitiços devastadores.",
            statChanges: { inteligencia: 22, mente: 20, arcano: 15 },
            equipment: ["Cajado da Aurora"],
            clothes: ["Robe Celestial"]
        },
        {
            name: "Mente Cósmica",
            description: "Equilíbrio entre magia ofensiva e defesa mental, ideal para controlar a batalha.",
            statChanges: { inteligencia: 20, mente: 18, arcano: 18 },
            equipment: ["Vara Arcana"],
            clothes: ["Manto do Cosmos"]
        },
        {
            name: "Conjurador Celestial",
            description: "Especialista em encantamentos à distância com feitiços precisos.",
            statChanges: { inteligencia: 24, arcano: 20, mente: 16 },
            equipment: ["Orbe Estelar"],
            clothes: ["Túnica dos Astros"]
        }
    ],
    Guerreiro: [
        {
            name: "Força Brutal",
            description: "Maximiza força e resistência para dominar adversários em combate direto.",
            statChanges: { forca: 20, vigor: 18, destreza: 15, vigor: 16 },
            equipment: ["Espada Grande"],
            clothes: ["Armadura de Ferro"]
        },
        {
            name: "Disciplina de Aço",
            description: "Equilíbrio entre técnica e poder, usando espada com precisão letal.",
            statChanges: { forca: 16, destreza: 18, vigor: 14 },
            equipment: ["Sabre de Aço"],
            clothes: ["Cota de Aço"]
        },
        {
            name: "Guardião de Ferro",
            description: "Concentra-se na defesa robusta e em contra-ataques poderosos.",
            statChanges: { forca: 17, vigor: 20, fortitude: 15 },
            equipment: ["Machado Pesado"],
            clothes: ["Armadura Pesada"]
        }
    ],
    Prisioneiro: [
        {
            name: "Redenção Sombria",
            description: "Aproveita a agilidade e astúcia do prisioneiro para golpes furtivos.",
            statChanges: { destreza: 18, inteligencia: 14, vigor: 12 },
            equipment: ["Estoc Ágil"],
            clothes: ["Vestimenta de Recluso"]
        },
        {
            name: "Liberdade Conquistada",
            description: "Equilibra força e destreza para superar adversidades.",
            statChanges: { forca: 16, destreza: 16, vigor: 14 },
            equipment: ["Espada Curta"],
            clothes: ["Roupas de Fuga"]
        },
        {
            name: "Espírito Rebelde",
            description: "Foca em ataques rápidos e evasão para surpreender o inimigo.",
            statChanges: { destreza: 20, mente: 12, vigor: 12 },
            equipment: ["Adaga Rápida"],
            clothes: ["Manto do Rebelde"]
        }
    ],
    Confessor: [
        {
            name: "Devoto da Luz",
            description: "Build centrada em fé para curas e ataques divinos com foco em milagres.",
            statChanges: { fe: 22, vigor: 16, inteligencia: 10 },
            equipment: ["Espada Sagrada"],
            clothes: ["Vestes Sagradas"]
        },
        {
            name: "Guardião da Fé",
            description: "Equilibra defesa e ataque usando o poder da fé para abater inimigos.",
            statChanges: { fe: 20, fortitude: 18, vigor: 14 },
            equipment: ["Martelo Sagrado"],
            clothes: ["Armadura do Confessor"]
        },
        {
            name: "Redentor Sagrado",
            description: "Transforma a fé em dano e suporte com vitórias e milagres.",
            statChanges: { fe: 24, vigor: 14, inteligencia: 12 },
            equipment: ["Cajado Divino"],
            clothes: ["Manto do Redentor"]
        }
    ],
    Miseravel: [
        {
            name: "Renascido na Dor",
            description: "Transforma a adversidade em poder com equilíbrio físico e mental.",
            statChanges: { forca: 14, vigor: 18, mente: 12 },
            equipment: ["Porrete Modificado"],
            clothes: ["Traje do Renascido"]
        },
        {
            name: "Caminho da Adversidade",
            description: "Resistência e uso da dor para ações ataques.",
            statChanges: { forca: 16, vigor: 16, destreza: 12 },
            equipment: ["Clava de Adversidade"],
            clothes: ["Vestimenta do Sobrevivente"]
        },
        {
            name: "Espírito Resiliente",
            description: "Maximiza resistência física e mental para batalhas prolongadas.",
            statChanges: { vigor: 20, mente: 14, fortitude: 12 },
            equipment: ["Maça Pesada"],
            clothes: ["Armadura Resiliente"]
        }
    ],
    Vagabundo: [
        {
            name: "Sombra Ardilosa",
            description: "Explora mobilidade e ataques surpresa para confundir inimigos.",
            statChanges: { destreza: 18, vigor: 14, arcano: 12 },
            equipment: ["Espada Curta"],
            clothes: ["Manto do Errante"]
        },
        {
            name: "Lâmina Veloz",
            description: "Combina velocidade e força para golpes relâmpago e evasão rápida.",
            statChanges: { destreza: 16, vigor: 16, forca: 14 },
            equipment: ["Sabre Tempestuoso"],
            clothes: ["Capa do Andarilho"]
        },
        {
            name: "Golpe Furtivo",
            description: "Versátil equilibrando agilidade com força bruta para diferentes situações.",
            statChanges: { destreza: 17, vigor: 15, forca: 13 },
            equipment: ["Adaga Versátil"],
            clothes: ["Traje Errante"]
        }
    ],
    Profeta: [
        {
            name: "Voz do Apocalipse",
            description: "Canaliza profecias destrutivas e feitiços devastadores com fé.",
            statChanges: { fe: 24, mente: 16, arcano: 14 },
            equipment: ["Lança Profética"],
            clothes: ["Vestes do Profeta"]
        },
        {
            name: "Visões do Futuro",
            description: "Prevê e manipula o campo de batalha com rituais místicos.",
            statChanges: { fe: 22, arcano: 18, mente: 14 },
            equipment: ["Cajado Oracular"],
            clothes: ["Manto Visionário"]
        },
        {
            name: "Selo do Destino",
            description: "Altera o rumo do combate com rituais antigos e poder místico.",
            statChanges: { fe: 26, arcano: 16, vigor: 12 },
            equipment: ["Espada dos Destinos"],
            clothes: ["Túnica do Selo"]
        }
    ],
    Samurai: [
        {
            name: "Caminho do Samurai",
            description: "Precisão e disciplina com espadas, mantendo honra e equilíbrio.",
            statChanges: { destreza: 20, vigor: 16, forca: 14 },
            equipment: ["Uchigatana"],
            clothes: ["Armadura do Samurai"]
        },
        {
            name: "Lâmina Veloz",
            description: "Ataques rápidos e cortes precisos priorizando agilidade.",
            statChanges: { destreza: 18, vigor: 14, forca: 13 },
            equipment: ["Katana Ligeira"],
            clothes: ["Vestimenta de Combate"]
        },
        {
            name: "Honra Eterna",
            description: "Tradição e poder para defesas sólidas e contra-ataques precisos.",
            statChanges: { destreza: 17, vigor: 18, forca: 15 },
            equipment: ["Katana Ancestral"],
            clothes: ["Traje do Honorável"]
        }
    ]
};

// Referências aos elementos do DOM
const dashboardSection = document.getElementById('dashboard-section');
const createCharacterSection = document.getElementById('create-character-section');
const viewCharacterSection = document.getElementById('view-character-section');
const charactersList = document.getElementById('characters-list');
const buildOptions = document.getElementById('build-options');
const buildButtonsContainer = document.getElementById('build-buttons');
const characterStats = document.getElementById('character-stats');
const characterDetails = document.getElementById('character-details');
const toast = document.getElementById('toast');

// Variáveis globais
let characters = [];
let selectedCharacterId = null;

// Função para exibir mensagens temporárias
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}
// Função para navegar entre seções
function navigateTo(section) {
    [dashboardSection, createCharacterSection, viewCharacterSection].forEach(s => {
        s.classList.add('hidden');
    });
    section.classList.remove('hidden');
}

// Função para limpar o conteúdo de um elemento
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Função para gerar IDs únicos
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Função para calcular modificador do atributo
function calculateModifier(value) {
    return Math.floor((value - 10) / 2);
}

function formatModifier(mod) {
    return mod >= 0 ? `+${mod}` : mod.toString();
}

// Função para converter nome do atributo para exibição
function statNameToDisplay(stat) {
    const statNames = {
        vigor: 'Vigor',
        mente: 'Mente',
        fortitude: 'Fortitude',
        forca: 'Força',
        destreza: 'Destreza',
        inteligencia: 'Inteligência',
        fe: 'Fé',
        arcano: 'Arcano'
    };
    return statNames[stat] || stat;
}

// Carrega personagens
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
        card.innerHTML = `
            <h3>${char.name}</h3>
            <div class="character-info">
                <span>Classe:</span> ${char.class}
            </div>
            <div class="character-info">
                <span>Raça:</span> ${char.race}
            </div>
            <div class="character-info">
                <span>Idade:</span> ${char.age}
            </div>
            ${char.build ? `<div class="character-info"><span>Build:</span> ${char.build}</div>` : ''}
            ${char.equipment && char.equipment.length > 0 ? `<div class="character-extra">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sword" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
                    <polyline points="14.5 17.5 3 6 6 3 17.5 14.5"></polyline>
                    <line x1="13" y1="19" x2="19" y2="13"></line>
                    <line x1="16" y1="16" x2="20" y2="20"></line>
                    <line x1="19" y1="21" x2="21" y2="19"></line>
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
        `;

        card.addEventListener('click', () => {
            viewCharacter(char.id);
        });

        charactersList.appendChild(card);
    });
}

// Gerencia mudança de classe do personagem
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
                document.querySelectorAll('.build-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
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

// Atualiza preview do personagem com base na classe e build selecionados
function updateCharacterPreview(className, buildIndex = null) {
    // CORREÇÃO: Encontra a classe no array usando .find()
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

        const statName = document.createElement('span');
        statName.className = 'stat-name';
        statName.textContent = statNameToDisplay(stat);

        const statValue = document.createElement('span');
        statValue.className = 'stat-value';
        statValue.textContent = value;

        const statMod = document.createElement('span');
        statMod.className = 'stat-modifier';
        statMod.textContent = formatModifier(calculateModifier(value));

        statBox.appendChild(statName);
        statBox.appendChild(statValue);
        statBox.appendChild(statMod);
        characterStats.appendChild(statBox);
    });
}

// Gerencia envio do formulário de criação de personagem
function handleCharacterFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('character-name').value;
    const age = document.getElementById('character-age').value;
    const race = document.getElementById('character-race').value;
    const sex = document.getElementById('character-sex').value;
    const characterClass = document.getElementById('character-class').value;
    const buildIndex = document.getElementById('character-build').value;
    
    // CORREÇÃO: Encontra os dados da classe selecionada no array
    const classData = characterClasses.find(c => c.nome === characterClass);

    // Adiciona uma verificação para garantir que a classe foi encontrada
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
        if (buildData.equipment) {
            character.equipment.push(...buildData.equipment);
        }
        if (buildData.clothes) {
            character.clothes.push(...buildData.clothes);
        }
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

// Função para visualizar detalhes do personagem
function viewCharacter(id) {
    selectedCharacterId = id;
    const character = characters.find(char => char.id === id);
    
    if (!character) {
        showToast('Personagem não encontrado!', 'error');
        return;
    }

    document.getElementById('character-view-title').textContent = `${character.name}`;
    clearElement(characterDetails);

    // Informações Básicas
    const basicInfo = document.createElement('div');
    basicInfo.className = 'detail-group';
    basicInfo.innerHTML = `
        <h4>Informações Básicas</h4>
        <div class="detail-grid">
            <div class="detail-item">Classe: ${character.class}</div>
            <div class="detail-item">Raça: ${character.race}</div>
            <div class="detail-item">Sexo: ${character.sex}</div>
            <div class="detail-item">Idade: ${character.age}</div>
            ${character.build ? `<div class="detail-item">Build: ${character.build}</div>` : ''}
        </div>
    `;
    characterDetails.appendChild(basicInfo);

    // Estatísticas
    const stats = document.createElement('div');
    stats.className = 'detail-group';
    stats.innerHTML = '<h4>Atributos</h4>';
    const statsGrid = document.createElement('div');
    statsGrid.className = 'stats-grid';

    Object.entries(character.stats).forEach(([stat, value]) => {
        const statBox = document.createElement('div');
        statBox.className = 'stat-box';

        const statName = document.createElement('span');
        statName.className = 'stat-name';
        statName.textContent = statNameToDisplay(stat);

        const statValue = document.createElement('span');
        statValue.className = 'stat-value';
        statValue.textContent = value;

        const statMod = document.createElement('span');
        statMod.className = 'stat-modifier';
        statMod.textContent = formatModifier(calculateModifier(value));

        statBox.appendChild(statName);
        statBox.appendChild(statValue);
        statBox.appendChild(statMod);
        statsGrid.appendChild(statBox);
    });

    stats.appendChild(statsGrid);
    characterDetails.appendChild(stats);

    // Equipamentos
    if (character.equipment && character.equipment.length) {
        const equipment = document.createElement('div');
        equipment.className = 'detail-group';
        equipment.innerHTML = `
        <h4>Equipamento</h4>
        <div class="detail-grid">
            ${character.equipment.map(item => `<div class="detail-item">${item}</div>`).join('')}
        </div>
        `;
        characterDetails.appendChild(equipment);
    }

    // Roupas
    if (character.clothes && character.clothes.length) {
        const clothes = document.createElement('div');
        clothes.className = 'detail-group';
        clothes.innerHTML = `
        <h4>Vestimentas</h4>
        <div class="detail-grid">
            ${character.clothes.map(item => `<div class="detail-item">${item}</div>`).join('')}
        </div>
        `;
        characterDetails.appendChild(clothes);
    }

    // Data de criação
    const creationDate = document.createElement('div');
    creationDate.className = 'detail-group';
    creationDate.innerHTML = `
        <div style="color: var(--muted-foreground); font-size: 0.875rem; display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll" style="margin-right: 0.5rem;">
                <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
                <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
            </svg>
            Criado em: ${new Date(character.createdAt).toLocaleString()}
        </div>
    `;
    characterDetails.appendChild(creationDate);

    navigateTo(viewCharacterSection);
}

function handleDeleteCharacter() {
    const modal = document.getElementById('delete-modal');
    modal.classList.remove('hidden');
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-character-btn').addEventListener('click', () => {
        navigateTo(createCharacterSection);
    });

    document.getElementById('character-class').addEventListener('change', handleClassChange);

    document.getElementById('character-form').addEventListener('submit', handleCharacterFormSubmit);

    document.getElementById('back-btn').addEventListener('click', () => {
        navigateTo(dashboardSection);
    });

    document.getElementById('view-back-btn').addEventListener('click', () => {
        navigateTo(dashboardSection);
    });

    document.getElementById('delete-character-btn').addEventListener('click', handleDeleteCharacter);

    document.getElementById('modal-cancel').addEventListener('click', () => {
        document.getElementById('delete-modal').classList.add('hidden');
    });

    document.getElementById('modal-confirm').addEventListener('click', () => {
        const allCharacters = JSON.parse(localStorage.getItem('characters') || []);
        const updatedCharacters = allCharacters.filter(char => char.id !== selectedCharacterId);
        localStorage.setItem('characters', JSON.stringify(updatedCharacters));

        showToast('Personagem excluído com sucesso!');
        document.getElementById('delete-modal').classList.add('hidden');
        loadCharacters();
        navigateTo(dashboardSection);
        selectedCharacterId = null;
    });

    // Carregar personagens ao inicializar
    loadCharacters();
});
