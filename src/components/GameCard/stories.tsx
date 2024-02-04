import { Meta, StoryObj } from '@storybook/react'
import GameCard from '.'
const meta: Meta<typeof GameCard> = {
  component: GameCard,
  args: {
    title: 'Red dead',
    developer: "Rockstar Games",
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
  },
  argTypes: {
    onFav: {
      action: 'click'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '30rem', margin: '0 auto', position: 'relative' }}>
        <Story />
      </div >
    ),
  ],
}
export default meta;
type Story = StoryObj<typeof GameCard>
export const Default: Story = {}
export const WithRibbon: Story = {
  args: {
    title: 'Red dead',
    developer: "Rockstar Games",
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    ribbon: "20%"
  }
}
