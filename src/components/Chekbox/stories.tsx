import { Meta, StoryObj } from '@storybook/react'
import Chekbox from '.'
const meta: Meta<typeof Chekbox> = {
  component: Chekbox
}
export default meta;
type Story = StoryObj<typeof Chekbox>
export const Default: Story = {
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
}

