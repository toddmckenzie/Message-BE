const router = require('express').Router();
const db = require('../models/messages.js');


router.post('/', (req, res) => {
    const reply = req.body;

    if (!reply.message_id || !reply.reply){
        res.status(400).json({ message: "Request needs message id and a reply"})
    }

    db
    .add(reply)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db
    .getAllReplies(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

module.exports = router;