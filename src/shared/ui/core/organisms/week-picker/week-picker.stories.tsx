import { Meta, StoryObj } from '@storybook/react'
import { WeekPicker } from '.'

const meta: Meta<typeof WeekPicker> = {
  title: '',
  component: WeekPicker,
}

export default meta

type TWeekPickerStory = StoryObj<typeof WeekPicker>

export const Default: TWeekPickerStory = {
  render: args => <WeekPicker {...args} />,
  args: {
  },
}
