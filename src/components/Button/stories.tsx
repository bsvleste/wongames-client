import { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
    }
  },
}
export default meta;
type Story = StoryObj<typeof Button>
export const Default: Story = {
  args: {
    children: "Buy now",
  }
}
export const WithIcon: Story = {
  args: {
    size: 'small',
    children: "Buy now",
    icon: <AddShoppingCart />
  }
}

