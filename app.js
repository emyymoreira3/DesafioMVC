import express from 'express';
import jogoRoutes from './routes/jogoRoutes.js';

const app = express();

app.use(express.json());

app.use('/jogos', jogoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}/jogos`);
});