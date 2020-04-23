const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove,
    find
}


function add(message){
    return db('dms').insert(message);
}

//need to test
function find(id){
    return db('dm_user').where({ user_id: id }).join('dms', 'user_id', '=', id)
}

function remove(id){
    return db('dms').where({ id }).del();
}