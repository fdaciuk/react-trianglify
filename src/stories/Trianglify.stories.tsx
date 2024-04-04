import type { StoryObj, Meta } from '@storybook/react'
import Trianglify, { type TrianglifyProps } from 'react-trianglify'

const meta: Meta<typeof Trianglify> = {
  component: Trianglify
}
export default meta

type Story = StoryObj<typeof Trianglify>

export const Basic: Story = {
  render: (args: TrianglifyProps) => <Trianglify {...args} />
}

export const BasicWithSize: Story = {
  render: (args: TrianglifyProps) => <Trianglify {...args} />
}

BasicWithSize.args = {
  width: 800,
  height: 200
}

export const SvgOutput: Story = {
  render: (args: TrianglifyProps) => <Trianglify {...args} />
}

SvgOutput.args = {
  output: 'svg'
}

export const SvgWithSize: Story = {
  render: (args: TrianglifyProps) => <Trianglify {...args} />
}

SvgWithSize.args = {
  width: 800,
  height: 200,
  output: 'svg'
}
