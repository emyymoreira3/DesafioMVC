let jogos = [
    { idjogo: 1, nomejogo: "GTA VI", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 2, nomejogo: "Minecraft", fabricante: "Mojang", idademin: 10, anolanc: 2011 },
    { idjogo: 3, nomejogo: "The Sims 4", fabricante: "EA", idademin: 12, anolanc: 2014 },
    { idjogo: 4, nomejogo: "Roblox", fabricante: "Roblox Corporation", idademin: 5, anolanc: 2006 },
    { idjogo: 5, nomejogo: "Super Mario Odyssey", fabricante: "Nintendo", idademin: 10, anolanc: 2017 }
];

// Listar todos os jogos
export const listarTodos = () => {
    return jogos;
};

// Listar por ID
export const buscarPorId = (id) => {
    return jogos.find(j => j.idjogo === id);
};

// Listar por fabricante
export const buscaFabricante = (fabricante) => {
    return jogos.filter(
        j => j.fabricante.toLowerCase() === fabricante.toLowerCase()
    );
};

// Listar por ano
export const buscaAno = (ano) => {
    return jogos.filter(
        j => j.anolanc === ano
    );
}

// Cria e insere um novo jogo no array
export const criar = ({ nomejogo, fabricante, idademin, anolanc }) => {
    const novoJogo = {
        idjogo: jogos.length + 1,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };

    jogos.push(novoJogo);
    return novoJogo;
};

// Atualiza um jogo existente pelo ID
export const atualizar = (id, { nomejogo, fabricante, idademin, anolanc }) => {
    const index = jogos.findIndex(j => j.idjogo === id);
    if (index === -1) return null;

    jogos[index] = {
        idjogo: id,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };

    return jogos[index];
};

// Remove um jogo pelo ID e retorna o item excluído
export const remover = (id) => {
    const index = jogos.findIndex(j => j.idjogo === id);
    if (index === -1) return null;

    const [jogoRemovido] = jogos.splice(index, 1);
    return jogoRemovido;
};

