const router = require('express').Router();
const db = require('../models/channels.js');

//post a dm..
router.post('/', (req, res) => {

    let message = req.body;

    if (!req.body.dm || !req.body.sender_id ||  !req.body.receiver_id){
        res.status(400).json({ message: "Bad Request, need a dm in body, a sender_id and a receiver_id"})
    }

    db
    .add(message)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

module.exports = router;