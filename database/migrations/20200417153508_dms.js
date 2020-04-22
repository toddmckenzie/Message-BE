exports.up = function(knex) {
    return knex.schema.createTable('dms', tbl => {
        tbl.increments();
        tbl.string('dm').notNullable();
        tbl.integer('sender_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        tbl.integer('receiver_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        tbl.timestamp('posted_at').notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dms');
};
