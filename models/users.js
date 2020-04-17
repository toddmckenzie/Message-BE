const db = require('../database/dbConfig.js');

module.exports = {
    find,
    add, 
    remove,
    findAll
}

function find(email){
    return db('users').where({email}).first()
}

function add(user){
    return db('users').insert(user)
}
function remove(id) {
    return db('users').where({ id }).del();
}

function findAll() {
    return db('users');
}