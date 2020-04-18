const router = require('express').Router();
const db = require('../models/messages.js');


router.post('/', (req, res) => {
    const message = req.body;

    if (!req.body.channel_id || !req.body.message || !req.body.user_id){
        res.status(400).json({ message: "Request needs channel id, message and user id"})
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