const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove,
    getUserChannels
}

function add(channel){
    return db('channels').insert(channel)
}

function remove(id){
    return db('channels').where({ id }).del();
}

function getUserChannels(id){
    return db('channels').where('user_id', id);
}
