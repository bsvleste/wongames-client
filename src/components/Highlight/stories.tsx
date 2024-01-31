import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
const meta: Meta<typeof Highlight> = {
  component: Highlight,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta;
type Story = StoryObj<typeof Highlight>
export const Default: Story = {
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: "Buy now",
    buttonLink: "/rdr2",
    backgroundImage: "/img/red-dead-img.jpg",
    floatImage: "/img/red-dead-float.png"
  }
}

