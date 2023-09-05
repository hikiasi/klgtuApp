import { Meta, StoryObj } from '@storybook/react'
import { RadioButton } from '.'

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
}

export default meta

type TRadioButtonStory = StoryObj<typeof RadioButton>

export const Default: TRadioButtonStory = {
  render: args => <RadioButton {...args} />,
  args: {
    isChecked: false,
    disabled: false
  }
}
