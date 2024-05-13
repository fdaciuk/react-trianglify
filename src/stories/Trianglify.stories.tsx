import type { Meta, StoryObj } from '@storybook/react';
import { Trianglify, TrianglifyProps } from 'react-trianglify';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/React Trianglify',
  component: Trianglify,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    output: "canvas",
  },
} satisfies Meta<TrianglifyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Trianglify key={Math.random()} />,
  args: {
    output: "canvas",
  }
};
