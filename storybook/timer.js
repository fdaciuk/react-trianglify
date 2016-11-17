'use strict'

import { Component, PropTypes } from 'react'

class Timer extends Component {
  componentDidMount () {
    this.timer = setInterval(() => this.setState({}), this.props.time)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return this.props.children()
  }
}

Timer.defaultProps = {
  time: 1500
}

Timer.propTypes = {
  time: PropTypes.number
}

export default Timer
