exports.up = function(knex) {
    return knex.schema.createTable('messages', tbl => {
        tbl.increments();
        tbl.string('message').notNullable();
        tbl.integer('channel_id').unsigned().references('id').inTable('channels').onDelete('CASCADE');
        tbl.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        tbl.timestamp('posted_at').notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
};
