exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'user1', password: "password", department: "Science"},
      ]);
    });
};