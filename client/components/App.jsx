import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCounters } from '../actions/counters'
import AddCounter from './AddCounter'
import Counter from './Counter'

function App () {
  const dispatch = useDispatch()
  const counters = useSelector(globalState => globalState.counters)

  useEffect(() => {
    dispatch(fetchCounters())
  }, [])

  return (
    <>
      <header className="header">
        <h1>My Counter App</h1>
      </header>
      <section className="main">
        {counters && counters.map(counter => {
          return <Counter key={counter.id} id={counter.id} />
        })}
        <AddCounter />
      </section>
    </>
  )
}

export default App
