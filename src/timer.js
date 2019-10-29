import { useState, useEffect } from 'react'
import t from 'prop-types'

function Timer ({ time = 1500, children }) {
  const [, forceSetState] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      forceSetState({})
    }, time)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return children()
}

Timer.propTypes = {
  time: t.number,
  children: t.func.isRequired
}

export default Timer
