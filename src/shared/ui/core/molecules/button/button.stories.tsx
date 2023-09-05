import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: '',
  component: Button,
}

export default meta

type TButtonStory = StoryObj<typeof Button>

export const Default: TButtonStory = {
  render: args => <Button {...args} />,
  args: {
    icon: 'plus',
    text: 'Text'
  },
}
