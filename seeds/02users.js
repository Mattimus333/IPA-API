exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert({
        first_name: "Matt",
        last_name: "Charles",
        user_name: "BeerMatt",
        email: 'Matt@beer.com',
        hashed_password: 'beer123'
      });
    })
};