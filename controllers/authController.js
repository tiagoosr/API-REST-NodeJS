const express = require('express');
const Tarefa = require('../models/tarefas');

const router = express.Router();

router.post('/tarefa', async (req, res) => {
    try {
        const tarefa = await Tarefa.create(req.body);
        return res.send({ tarefa })
    }
    catch (err) {
        return res.status(400).send({ error: 'Erro ao cadastrar' })
    }
});

// /:id serve para passar id para o endpoind
router.get('/tarefa', async (req, res) => {
        await Tarefa.find(req.body, function (err, obj) {
        console.log(obj)
    });
    // return res.send({ data })
});

router.put('/tarefa/:id', async (req, res) => {
    const data = await Tarefa.findOneAndUpdate({ _id: req.params.id }, req.body)
    return res.send({ data })
});

module.exports = (app) => app.use(router)