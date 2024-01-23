import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'
const meta: Meta<typeof MediaMatch> = {
  component: MediaMatch
}
export default meta;
type Story = StoryObj<typeof MediaMatch>
export const Desktop: Story = {
  render: () => <MediaMatch greaterThan='medium'>Only desktop</MediaMatch>
}
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <MediaMatch lessThan='medium'>Only mobile</MediaMatch>
}

