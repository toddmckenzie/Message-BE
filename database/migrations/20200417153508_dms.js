exports.up = function(knex) {
    return knex.schema.createTable('dms', tbl => {
        tbl.increments();
        tbl.integer('sender_user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        tbl.integer('reciever_user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dms');
};
