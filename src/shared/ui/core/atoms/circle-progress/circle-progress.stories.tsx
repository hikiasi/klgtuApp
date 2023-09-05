import { Meta, StoryObj } from '@storybook/react'
import { InfinityCircleProgress } from '.'

const meta: Meta<typeof InfinityCircleProgress> = {
  title: '',
  component: InfinityCircleProgress,
}

export default meta

type TCircleProgressStory = StoryObj<typeof InfinityCircleProgress>

export const Default: TCircleProgressStory = {
  render: (args) => <InfinityCircleProgress {...args} />,
  args: {

  },
}
