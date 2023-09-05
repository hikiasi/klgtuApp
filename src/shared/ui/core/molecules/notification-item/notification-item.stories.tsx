import { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from '.'

const meta: Meta<typeof NotificationItem> = {
  title: '',
  component: NotificationItem,
}

export default meta

type TNotificationItemStory = StoryObj<typeof NotificationItem>

const Component = ({ text, isPicked = false, timer = 10 }: { text: string, isPicked?: boolean, timer?: number }) => {
  return (
    <NotificationItem
      onClose={() => { }}
      autoCloseTime={timer}
      text={text}
      isPicked={isPicked}
    />
  )
}

export const Default: TNotificationItemStory = {
  render: args => <Component
    text={args.text}
    isPicked={args.isPicked}
    timer={args.autoCloseTime}
  />,
  args: {
    text: "Какая-то очень длинная, предлинная ошибка которая не поместиться в одну строчку и будет занимать очень много места)))",
    isPicked: true,
    autoCloseTime: 10
  },
}
