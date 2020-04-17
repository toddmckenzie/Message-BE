const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../config/secrets.js');
const db = require('../models/users.js');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    if (!user.username || !user.password || !user.email) {
        return res.status(400).json({ message: "A username, password or email is missing."})
    }

    db
    .add(user)
    .then(result => {
        db.find(user.email)
        .then(user => {
            const token = generateToken(user)
            res.status(200).json({
                id: user.id,
                username: user.username,
                email: user.email,
                token: token,
                expiration: Date.now() + 1000*60*60*24
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal server error after adding user"})
        })
        

    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error before adding user."})
    })

})

//have to sign in with email and password
router.post('/', (req, res) => {
    let user = req.body;

    if (!req.body.email || !req.body.password){
        res.status(400).json({ message: "Must have email and password"})
    }

    db
    .find(req.body.email)
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    token: token
            })
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    db
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.get('/all', (req, res) => {
    db
    .findAll()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    }
    const options = {
        expiresIn: '24h'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}


module.exports = router;