import request from 'superagent'

export function getCounters () {
  return request.get('/api/counters')
    .then(res => res.body)
}

export function updateCounter (id, newValue) {
  return request.patch(`/api/counters/${id}`)
    .send({ value: newValue })
    .then(res => res.body)
}

export function addCounter (name) {
  return request.post('/api/counters')
    .send({ name })
    .then(res => res.body)
}
