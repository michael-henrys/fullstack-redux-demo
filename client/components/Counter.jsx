import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/counters'

export default function Counter ({ id }) {
  const counters = useSelector(globalState => globalState.counters)

  const counter = counters.find(counter => counter.id === id)

  const dispatch = useDispatch()

  const increment = () => {
    console.log(counter.value)
    dispatch(incrementCounter(id, counter.value))
  }

  const decrement = () => {
    console.log(counter.value)
    dispatch(decrementCounter(id, counter.value))
  }

  return (
    <div>
      {counter.name}: {counter.value}
      <div>
        <button onClick={increment}>+</ button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}
