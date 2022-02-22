exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('counters').del()
    .then(function () {
      // Inserts seed entries
      return knex('counters').insert([
        { id: 1, name: 'Counter', value: 1 }
      ])
    })
}
