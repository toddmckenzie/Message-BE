exports.up = function(knex) {
    return knex.schema.createTable('replies', tbl => {
        tbl.increments();
        tbl.integer('message_id').references('id').inTable('messages').onDelete('CASCADE')
        tbl.string('reply').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('replies');
};
