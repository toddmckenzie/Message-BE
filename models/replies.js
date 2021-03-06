const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove,
    getAllReplies,
    update
}


function add(reply){
    return db('replies').insert(reply)
}


function remove(id){
    return db('replies').where({ id }).del();
}

function getAllReplies(id){
    return db('replies').where({ message_id: id });
}

function update(id, reply){
    return db('replies').where({ id }).update(reply)
}