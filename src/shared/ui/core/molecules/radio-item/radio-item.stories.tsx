import { Meta, StoryObj } from '@storybook/react'
import { RadioItem } from '.'

const meta: Meta<typeof RadioItem> = {
  title: '',
  component: RadioItem,
}

export default meta

type TRadioItemStory = StoryObj<typeof RadioItem>

export const Default: TRadioItemStory = {
  render: args => <RadioItem {...args} />,
  args: {
    title: 'title',
    message: 'message',
    alarmText: 'alarm',
    isAlarm: false,
    buttonProps: {
      disabled: false,
      isChecked: false,
      id: "234123",
      onChange: () => { },
    }
  },
}
