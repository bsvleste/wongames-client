import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'
const meta: Meta<typeof Banner> = {
  component: Banner,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta;
type Story = StoryObj<typeof Banner>
export const Default: Story = {
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',

  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const WithRibbon: Story = {
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: "20%"
  }
}
