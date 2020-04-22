const db = require('../database/dbConfig.js');

module.exports = {
    add, 
    remove,
    getDMs
}


function add(message){
    return db('dms').insert(message);
}

