import { Meta, StoryObj } from '@storybook/react'
import Footer from '.'
const meta: Meta<typeof Footer> = {
  component: Footer
}
export default meta;
type Story = StoryObj<typeof Footer>
export const Mobile: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
}
export const Default: Story = {
  render: () => <div style={{ maxWidth: '130rem', margin: '0 auto' }}><Footer /> </div>
}
