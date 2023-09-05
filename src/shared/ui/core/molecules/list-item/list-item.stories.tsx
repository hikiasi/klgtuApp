import { Meta, StoryObj } from '@storybook/react'
import { ListItem } from '.'

const meta: Meta<typeof ListItem> = {
  title: '',
  component: ListItem,
}

export default meta

type TListItemStory = StoryObj<typeof ListItem>

export const Default: TListItemStory = {
  render: args => <ListItem {...args} />,
  args: {
    text: 'List text',
  },
}
