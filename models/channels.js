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

//need to join with channels tables.....
function getUserChannels(id){
    return db('user_channels').where('user_id', id).join('channels', 'user_channels.channel_id').select('*');
}
