import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { IconsList, TimetableIconsList } from '.'

const CommonIcons = Object.values(IconsList)
const TimetableIcons = Object.values(TimetableIconsList)

const CommonIconsList = ({ }) => {
  return (
    <Wrapper>
      {CommonIcons.map(item => item)}
      <Divider />
      {TimetableIcons.map(item => item)}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`
const Divider = styled.div`
  width: 100%;
  height: 30px;
`


const meta: Meta<typeof CommonIconsList> = {
  title: '',
  component: CommonIconsList,
}

export default meta

type TCommonIconsListStory = StoryObj<typeof CommonIconsList>

export const Default: TCommonIconsListStory = {
  render: args => <CommonIconsList {...args} />,
  args: {},
}
