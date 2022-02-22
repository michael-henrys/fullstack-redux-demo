const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCounters()
    .then(counters => {
      res.json(counters)
      return null
    }).catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  db.addCounter(req.body.name)
    .then(counters => {
      res.json(counters)
      return null
    }).catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/:id', (req, res) => {
  db.updateCounter(req.params.id, req.body.value)
    .then(counters => {
      res.json(counters)
      return null
    }).catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/:id', (req, res) => {
  db.deleteCounter(req.params.id)
    .then(counters => {
      res.json(counters)
      return null
    }).catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
