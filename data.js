export const characterClasses = [
    {
        nome: "Heroi",
        baseStats: { vigor: 14, mente: 9, fortitude: 12, forca: 16, destreza: 9, inteligencia: 7, fe: 8, arcano: 11 },
        equipment: ["Machado de batalha", "Escudo de couro"],
        clothes: [],
    },
    {
        nome: "Bandido",
        baseStats: { vigor: 10, mente: 11, fortitude: 10, forca: 9, destreza: 13, inteligencia: 9, fe: 8, arcano: 14 },
        equipment: ["Adaga", "Arco curto"],
        clothes: ["Capuz de couro"],
    },
    {
        nome: "Astrologo",
        baseStats: { vigor: 9, mente: 15, fortitude: 8, forca: 8, destreza: 12, inteligencia: 16, fe: 7, arcano: 16 },
        equipment: ["Cajado", "Grimório"],
        clothes: ["Túnica estrelada"],
    },
    {
        nome: "Guerreiro",
        baseStats: { vigor: 15, mente: 10, fortitude: 14, forca: 16, destreza: 12, inteligencia: 8, fe: 9, arcano: 7 },
        equipment: ["Espada longa", "Escudo de metal"],
        clothes: ["Armadura de placas"],
    },
    {
        nome: "Prisioneiro",
        baseStats: { vigor: 11, mente: 12, fortitude: 11, forca: 11, destreza: 14, inteligencia: 14, fe: 6, arcano: 9 },
        equipment: ["Estoque", "Correntes"],
        clothes: ["Trapos de prisioneiro"],
    },
    {
        nome: "Confessor",
        baseStats: { vigor: 10, mente: 13, fortitude: 10, forca: 10, destreza: 12, inteligencia: 13, fe: 16, arcano: 9 },
        equipment: ["Maça", "Tomo sagrado"],
        clothes: ["Vestes clericais"],
    },
    {
        nome: "Miseravel",
        baseStats: { vigor: 10, mente: 10, fortitude: 10, forca: 10, destreza: 10, inteligencia: 10, fe: 10, arcano: 10 },
        equipment: ["Porrete"],
        clothes: ["Trapos"],
    },
    {
        nome: "Vagabundo",
        baseStats: { vigor: 11, mente: 10, fortitude: 10, forca: 10, destreza: 13, inteligencia: 9, fe: 14, arcano: 7 },
        equipment: ["Adaga", "Escudo pequeno"],
        clothes: ["Vestes simples"],
    },
    {
        nome: "Profeta",
        baseStats: { vigor: 10, mente: 14, fortitude: 8, forca: 11, destreza: 10, inteligencia: 7, fe: 16, arcano: 10 },
        equipment: ["Lança", "Talismã"],
        clothes: ["Túnica de oráculo"],
    },
    {
        nome: "Samurai",
        baseStats: { vigor: 12, mente: 11, fortitude: 13, forca: 15, destreza: 15, inteligencia: 9, fe: 8, arcano: 8 },
        equipment: ["Katana", "Arco longo"],
        clothes: ["Armadura de samurai"],
    }
];

export const classBuilds = {
    Heroi: [
        { name: "Força do Destino", description: "Build focado em alta força e vigor.", statChanges: { forca: 20, vigor: 18, fortitude: 15 }, equipment: ["Espada Lendária"], clothes: ["Armadura de Cavaleiro"] },
        { name: "Espírito Indomável", description: "Combina força com agilidade.", statChanges: { forca: 18, destreza: 16, vigor: 14 }, equipment: ["Machado de Guerra"], clothes: ["Cota de Malha Real"] },
        { name: "Herói Ancestral", description: "Foco em combate corpo a corpo e resistência.", statChanges: { forca: 22, vigor: 16, fortitude: 14 }, equipment: ["Martelo de Guerra"], clothes: ["Túnica do Herói"] }
    ],
    Bandido: [
        { name: "Sombra Ardilosa", description: "Especialista em furtividade.", statChanges: { destreza: 20, arcano: 12, vigor: 10 }, equipment: ["Adaga Silenciosa"], clothes: ["Manto das Sombras"] },
        { name: "Lâmina Veloz", description: "Foco em velocidade e precisão.", statChanges: { destreza: 18, mente: 16, vigor: 12 }, equipment: ["Espada Curta"], clothes: ["Vestimentas Leves"] },
        { name: "Golpe Furtivo", description: "Ataques críticos letais.", statChanges: { destreza: 19, arcano: 14, vigor: 11 }, equipment: ["Punhal de Assassino"], clothes: ["Capuz do Ladrão"] }
    ],
    Astrologo: [
        { name: "Visão Estelar", description: "Inteligência e mente para feitiços.", statChanges: { inteligencia: 22, mente: 20, arcano: 15 }, equipment: ["Cajado da Aurora"], clothes: ["Robe Celestial"] },
        { name: "Mente Cósmica", description: "Equilíbrio entre magia e defesa mental.", statChanges: { inteligencia: 20, mente: 18, arcano: 18 }, equipment: ["Vara Arcana"], clothes: ["Manto do Cosmos"] },
        { name: "Conjurador Celestial", description: "Encantamentos à distância.", statChanges: { inteligencia: 24, arcano: 20, mente: 16 }, equipment: ["Orbe Estelar"], clothes: ["Túnica dos Astros"] }
    ],
    Guerreiro: [
        { name: "Força Brutal", description: "Maximiza força e resistência.", statChanges: { forca: 20, vigor: 18, destreza: 15 }, equipment: ["Espada Grande"], clothes: ["Armadura de Ferro"] },
        { name: "Disciplina de Aço", description: "Equilíbrio entre técnica e poder.", statChanges: { forca: 16, destreza: 18, vigor: 14 }, equipment: ["Sabre de Aço"], clothes: ["Cota de Aço"] },
        { name: "Guardião de Ferro", description: "Defesa robusta e contra-ataques.", statChanges: { forca: 17, vigor: 20, fortitude: 15 }, equipment: ["Machado Pesado"], clothes: ["Armadura Pesada"] }
    ],
    Prisioneiro: [
        { name: "Redenção Sombria", description: "Agilidade e astúcia.", statChanges: { destreza: 18, inteligencia: 14, vigor: 12 }, equipment: ["Estoc Ágil"], clothes: ["Vestimenta de Recluso"] },
        { name: "Liberdade Conquistada", description: "Equilibra força e destreza.", statChanges: { forca: 16, destreza: 16, vigor: 14 }, equipment: ["Espada Curta"], clothes: ["Roupas de Fuga"] },
        { name: "Espírito Rebelde", description: "Ataques rápidos e evasão.", statChanges: { destreza: 20, mente: 12, vigor: 12 }, equipment: ["Adaga Rápida"], clothes: ["Manto do Rebelde"] }
    ],
    Confessor: [
        { name: "Devoto da Luz", description: "Build centrada em fé e curas.", statChanges: { fe: 22, vigor: 16, inteligencia: 10 }, equipment: ["Espada Sagrada"], clothes: ["Vestes Sagradas"] },
        { name: "Guardião da Fé", description: "Defesa e ataque usando fé.", statChanges: { fe: 20, fortitude: 18, vigor: 14 }, equipment: ["Martelo Sagrado"], clothes: ["Armadura do Confessor"] },
        { name: "Redentor Sagrado", description: "Fé em dano e suporte.", statChanges: { fe: 24, vigor: 14, inteligencia: 12 }, equipment: ["Cajado Divino"], clothes: ["Manto do Redentor"] }
    ],
    Miseravel: [
        { name: "Renascido na Dor", description: "Equilíbrio físico e mental.", statChanges: { forca: 14, vigor: 18, mente: 12 }, equipment: ["Porrete Modificado"], clothes: ["Traje do Renascido"] },
        { name: "Caminho da Adversidade", description: "Resistência e uso da dor.", statChanges: { forca: 16, vigor: 16, destreza: 12 }, equipment: ["Clava de Adversidade"], clothes: ["Vestimenta do Sobrevivente"] },
        { name: "Espírito Resiliente", description: "Resistência física e mental.", statChanges: { vigor: 20, mente: 14, fortitude: 12 }, equipment: ["Maça Pesada"], clothes: ["Armadura Resiliente"] }
    ],
    Vagabundo: [
        { name: "Sombra Ardilosa", description: "Mobilidade e ataques surpresa.", statChanges: { destreza: 18, vigor: 14, arcano: 12 }, equipment: ["Espada Curta"], clothes: ["Manto do Errante"] },
        { name: "Lâmina Veloz", description: "Velocidade e força.", statChanges: { destreza: 16, vigor: 16, forca: 14 }, equipment: ["Sabre Tempestuoso"], clothes: ["Capa do Andarilho"] },
        { name: "Golpe Furtivo", description: "Equilibra agilidade e força.", statChanges: { destreza: 17, vigor: 15, forca: 13 }, equipment: ["Adaga Versátil"], clothes: ["Traje Errante"] }
    ],
    Profeta: [
        { name: "Voz do Apocalipse", description: "Profecias e feitiços devastadores.", statChanges: { fe: 24, mente: 16, arcano: 14 }, equipment: ["Lança Profética"], clothes: ["Vestes do Profeta"] },
        { name: "Visões do Futuro", description: "Rituais místicos.", statChanges: { fe: 22, arcano: 18, mente: 14 }, equipment: ["Cajado Oracular"], clothes: ["Manto Visionário"] },
        { name: "Selo do Destino", description: "Rituais antigos e poder místico.", statChanges: { fe: 26, arcano: 16, vigor: 12 }, equipment: ["Espada dos Destinos"], clothes: ["Túnica do Selo"] }
    ],
    Samurai: [
        { name: "Caminho do Samurai", description: "Precisão e disciplina.", statChanges: { destreza: 20, vigor: 16, forca: 14 }, equipment: ["Uchigatana"], clothes: ["Armadura do Samurai"] },
        { name: "Lâmina Veloz", description: "Agilidade e cortes precisos.", statChanges: { destreza: 18, vigor: 14, forca: 13 }, equipment: ["Katana Ligeira"], clothes: ["Vestimenta de Combate"] },
        { name: "Honra Eterna", description: "Defesas sólidas e contra-ataques.", statChanges: { destreza: 17, vigor: 18, forca: 15 }, equipment: ["Katana Ancestral"], clothes: ["Traje do Honorável"] }
    ]
};