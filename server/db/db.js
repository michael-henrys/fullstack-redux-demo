const connection = require('./connection')

module.exports = {
  getCounters,
  addCounter,
  updateCounter,
  deleteCounter
}

function getCounters () {
  return connection('counters')
    .select('*')
}

function addCounter (name) {
  return connection('counters')
    .insert({ name, value: 0 })
    .then(() => {
      return getCounters()
    })
}

function updateCounter (id, value) {
  return connection('counters')
    .where('id', id)
    .update({ value })
    .then(() => {
      return getCounters()
    })
}

function deleteCounter (id) {
  return connection('counters')
    .where('id', id)
    .del()
    .then(() => {
      return getCounters()
    })
}
