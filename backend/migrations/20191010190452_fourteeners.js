exports.up = async function (knex, Promise) {
  await knex.schema.createTable('fourteeners_list', table => {
    // creates the forteeners list table in the db
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('name').notNullable()
    table.string('hikeDistance').notNullable()
    table.string('distanceFromDenver').notNullable()
    table.string('altitude').notNullable()
    table.string('totalGain').notNullable()
    table.string('range').notNullable()
    table.string('rank').notNullable()
    table.string('imageUrl').notNullable()
  })
}

exports.down = async function (knex, Promise) {
  // in case the migration needs to be reverted
  await knex.schema.dropTable('foorteeners_list')
}
