const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove
}

function add(message){
    return db('messages').insert(message)
}

function remove(id){
    return db('messages').where({ id }).del();
}

