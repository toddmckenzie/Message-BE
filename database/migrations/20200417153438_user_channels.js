exports.up = function(knex) {
    return knex.schema.createTable('user_channels', tbl => {
        tbl.increments();
        tbl.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        tbl.integer('channel_id').unsigned().references('id').inTable('channels').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_channels');
};
