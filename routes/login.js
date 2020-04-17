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
        db.findUser(user.email)
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

const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '24h'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}


module.exports = router;