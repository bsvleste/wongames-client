import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'
const meta: Meta<typeof Menu> = {
  component: Menu
}
export default meta;
type Story = StoryObj<typeof Menu>
export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
}

