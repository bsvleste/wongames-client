import { Meta, StoryObj } from '@storybook/react'
import BannerSlider from '.'
import items from './mock'
const meta: Meta<typeof BannerSlider> = {
  component: BannerSlider,
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
type Story = StoryObj<typeof BannerSlider>
export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
}

