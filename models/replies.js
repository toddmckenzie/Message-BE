const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove
}


function add(reply){
    return db('replies').insert(reply)
}


function remove(id){
    return db('replies').where({ id }).del();
}
