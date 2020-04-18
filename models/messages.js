const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove,
    getChannelMessages
}

function add(message){
    return db('messages').insert(message)
}

function remove(id){
    return db('messages').where({ id }).del();
}

function getChannelMessages(id){
    return db('messages').where({ id });
}
