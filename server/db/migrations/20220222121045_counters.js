exports.up = function (knex) {
  return knex.schema.createTable('counters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('value')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('counters')
}
