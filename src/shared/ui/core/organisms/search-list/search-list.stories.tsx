import { Meta, StoryObj } from '@storybook/react'
import { SearchList } from '.'

const meta: Meta<typeof SearchList> = {
  title: '',
  component: SearchList,
}

export default meta

type TSearchListStory = StoryObj<typeof SearchList>

export const Default: TSearchListStory = {
  render: args => <SearchList {...args} />,
  args: {
    items: [
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
      'one',
      'two',
      'three',
    ]
  },
}
