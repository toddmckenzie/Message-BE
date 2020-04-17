const bcryptjs = require('bcryptjs');


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'user1', email: 'email1', password: bcryptjs.hashSync("password", 8)},
        {id: 2, username: 'user2', email: 'email2', password: bcryptjs.hashSync("password", 8)},
        {id: 3, username: 'user3', email: 'email3', password: bcryptjs.hashSync("password", 8)}
      ]);
    });
};
