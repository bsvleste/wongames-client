import { Meta, StoryObj } from '@storybook/react'
import Ribbon from '.'
const meta: Meta<typeof Ribbon> = {
  component: Ribbon,
  decorators: [
    (Story) => (
      <div style={{ width: '40rem', margin: '0 auto', height: '25rem', position: 'relative', background: "#202424" }}>
        <Story />
      </div>
    ),
  ],
}
export default meta;
type Story = StoryObj<typeof Ribbon>
export const Default: Story = {
  args: {
    children: "Best Seller"
  }
}

