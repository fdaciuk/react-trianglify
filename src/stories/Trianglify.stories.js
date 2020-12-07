import React from 'react'
import Trianglify from '../index'

export default {
  title: 'Trianglify',
  component: Trianglify,
  argTypes: {
    output: {
      type: ''
    }
  }
}

export const Basic = (args) => <Trianglify {...args} />

export const BasicWithSize = (args) => <Trianglify {...args} />
BasicWithSize.args = {
  width: 800,
  height: 200
}

export const SvgOutput = (args) => <Trianglify {...args} />
SvgOutput.args = {
  output: 'svg'
}

export const SvgWithSize = (args) => <Trianglify {...args} />
SvgWithSize.args = {
  width: 800,
  height: 200,
  output: 'svg'
}
