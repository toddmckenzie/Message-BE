exports.up = function(knex) {
    return knex.schema.createTable('dm_user', tbl => {
        tbl.increments();
        tbl.integer('dm_id').unsigned().references('id').inTable('dms').onDelete('CASCADE');
        tbl.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dm_user');
};
