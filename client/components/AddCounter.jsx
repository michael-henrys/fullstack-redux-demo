import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newCounter } from '../actions/counters'

export default function AddCounter () {
  const [counterName, setCounterName] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(newCounter(counterName))
  }

  const changeHandler = (e) => {
    setCounterName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={counterName} onChange={changeHandler} />
        <input type="submit" value="Add Counter" />
      </form>
    </div>
  )
}
