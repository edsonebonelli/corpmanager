import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

// CADASTRAR uma nova empresa

router.post('/cadastro', async (req, res) => {
    await prisma.user.create({
        data: {
            nome: req.body.nome,
            CNPJ: req.body.CNPJ,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        }
    })
    res.status(201).json(req.body);
})

// LISTAR uma nova empresa 

router.get('/cadastro', async (req, res) => {

    const router = await prisma.user.findMany();

    res.status(200).json(router);
})

// ATUALIZAR uma empresa 

router.put('/cadastro/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            nome: req.body.nome,
            CNPJ: req.body.CNPJ,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        }
    })
    res.status(201).json(req.body);
})

// DELETAR uma empresa 

router.delete('/cadastro/:id', async (req, res) =>{
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Cadastro deletado com sucesso!'})
})

export default router


