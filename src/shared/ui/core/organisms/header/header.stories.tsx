import { Meta, StoryObj } from '@storybook/react'
import Header from '.'
import { IconKLGTUApp } from '../../atoms'
import styled from 'styled-components'
import { Button, IconButton } from '../../molecules'

type THeaderComponent = {
  isLogo?: boolean,
}

const HeaderComponent = ({ isLogo }: THeaderComponent) => {
  return (
    <Header>
      <CustomBrand>
        {isLogo ?
          <IconWrapper>
            <IconKLGTUApp
              width={141}
              height={32}
            />
          </IconWrapper>
          :
          <Button
            text='Выбор расписания'
            variant='text'
            icon='chevronLeft'
            size='large'
          />
        }
      </CustomBrand>
      <Header.Activities>
        <ButtonsWrapper>
          <IconButton
            icon='sun'
            variant='transparent'
          />
          <Button
            text='скачать приложение'
            variant='outlined'
          />
        </ButtonsWrapper>
      </Header.Activities>
    </Header>
  )
}
const IconWrapper = styled.div`
  cursor: pointer;
`
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const CustomBrand = styled(Header.Brand)`
  & button {
    padding: 0px !important;
  }
`

const meta: Meta<typeof HeaderComponent> = {
  title: '',
  component: HeaderComponent,
}

export default meta

type THeaderStory = StoryObj<typeof HeaderComponent>

export const Default: THeaderStory = {
  render: args => <HeaderComponent {...args} />,
  args: {
    isLogo: true,
  },
}
