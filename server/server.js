import express from 'express'
import cors from 'cors'
import publicRoutes from '../routes/publicRoutes.js'

const app = express();
app.use(express.json());
app.use(cors())

app.use('/', publicRoutes);
app.listen(3000, () => console.log("Servidor Rodando"));
