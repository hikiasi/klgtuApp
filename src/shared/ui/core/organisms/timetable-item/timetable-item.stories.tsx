import { Meta, StoryObj } from '@storybook/react'
import { TimetableItem } from '.'
import { TTimetableItem } from './timetable-item'
import styled from 'styled-components'

const TimetableWrapper = (props: TTimetableItem) => {
  return (
    <Wrapper>
      <TimetableItem {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme: { palette } }) => palette.content.cnt_150};
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  border-radius: 20px;
  margin: 20px auto;
  width: 752px;
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  gap: 10px;
`

const meta: Meta<typeof TimetableItem> = {
  title: '',
  component: TimetableItem,
}

export default meta

type TTimetableItemStory = StoryObj<typeof TimetableItem>

export const Default: TTimetableItemStory = {
  render: args => <TimetableWrapper {...args} />,
  args: {
    type: 'exam',
    time: '10:35 – 12:00',
    title: 'Title',
    number: '2',
    status: '',
    subtitle: "Subtitle",
    classroomNumber: '248',
  },

}
