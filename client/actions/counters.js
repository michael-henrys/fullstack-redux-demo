import { getCounters, updateCounter, addCounter } from '../apis/counters'
export const SET_COUNTERS = 'SET_COUNTERS'

export function setCounters (counters) {
  return {
    type: SET_COUNTERS,
    counters
  }
}

// thunks
export function fetchCounters () {
  return (dispatch) => {
    getCounters()
      .then(counters => {
        dispatch(setCounters(counters))
        return null
      })
      .catch(err => console.log(err))
  }
}

export function incrementCounter (id, currentValue) {
  return (dispatch) => {
    console.log(currentValue)
    updateCounter(id, currentValue + 1)
      .then(counters => {
        dispatch(setCounters(counters))
        return null
      })
      .catch(err => console.log(err))
  }
}

export function decrementCounter (id, currentValue) {
  return (dispatch) => {
    updateCounter(id, currentValue - 1)
      .then(counters => {
        dispatch(setCounters(counters))
        return null
      })
      .catch(err => console.log(err))
  }
}

export function newCounter (name) {
  return (dispatch) => {
    addCounter(name)
      .then(counters => {
        dispatch(setCounters(counters))
        return null
      })
      .catch(err => console.log(err))
  }
}
