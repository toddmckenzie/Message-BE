exports.up = function(knex) {
    return knex.schema.createTable('', tbl => {
        tbl.increments();
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('');
};
