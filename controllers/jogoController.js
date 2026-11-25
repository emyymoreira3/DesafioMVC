import * as JogoModel from '../models/jogoModel.js';

// GET /jogos
export const getJogos = (req, res) => {
    const jogos = JogoModel.listarTodos();
    res.status(200).json(jogos);
}

// GET /jogos/:id
export const getJogoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = JogoModel.buscarPorId(id);
    
    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({ mensagem: `Jogo não encontrado para o ID ${id}` });
    }
}

// GET /jogos/fabricante/:fabricante
export const getJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante
    const jogosFabricante = JogoModel.buscaFabricante(fabricante);

    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante)
    } else{
        res.status(404).json({ mensagem: `Nenhum jogo encontrado para o fabricante ${fabricante}` });
    }
}

// GET /jogos/ano/:ano
export const getJogosPorAno = (req, res) => {
    const ano = parseInt(req.params.ano);
    const jogosAno = JogoModel.buscaAno(ano);

    if (jogosAno.length > 0) {
        res.status(200).json(jogosAno)
    } else {
        res.status(404).json({ mensagem: `Nenhum jogo encontrado para o ano ${ano}` });
    }
}

// POST /jogos
export const postJogo = (req, res) => {
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || !idademin || !anolanc) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }
 const novoJogo = JogoModel.criar({ nomejogo, fabricante, idademin, anolanc });
    res.status(200).json(novoJogo);
}
// PUT /jogos/:id
export const putJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if ( !nomejogo || !fabricante || !idademin || !anolanc) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }


const jogoAtualizado = JogoModel.atualizar(id, { nomejogo, fabricante, idademin, anolanc });
if (!jogoAtualizado) {
    return res.status(404).json({ mensagem: `Jogo não encontrado para o ID ${id}` });
}

res.status(200).json(jogoAtualizado);
}

// DELETE /jogos/:id
export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = JogoModel.remover(id);

    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};