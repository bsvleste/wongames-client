import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'
import items from './mock'
const meta: Meta<typeof GameCardSlider> = {
  component: GameCardSlider,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],

  args: {
    items
  }
}
export default meta;
type Story = StoryObj<typeof GameCardSlider>
export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
}

