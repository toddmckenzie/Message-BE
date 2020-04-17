const router = require('express').Router();
const db = require('../models/channels.js');

//make new channel
router.post('/', (req, res) => {

    if (!req.body.name || !req.body.description) {
        res.status(400).json({ message: "Must include name and description"})
    }

    db
    .add(req.body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})
//get users channels by their id
router.get('/user/:id', (req, res) => {
    const user_id = req.params.id;

    db
    .getUserChannels(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//delete a channel by id of the channel.
router.delete('/:id', (req, res) => {
    const channel_id = req.params.id;

    db
    .remove(channel_id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })

})

module.exports = router;