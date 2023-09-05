import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components';
import Card from '.';
import { Typography } from '../../atoms';
import { Button } from '../../molecules';


type TCardComponent = {

}

const CardComponent = ({ }: TCardComponent) => {
  return (
    <Card>
      <ContentWrapper>

      <Card.Info>
        <Typography
              variant="title1" type="bold"
            >
              Веб-версия расписания КГТУ
            </Typography>
        <ButtonsWrapper>
          <Button
              text='Перейти к расписанию'
              variant='filled'
              size='large'
            />
        </ButtonsWrapper>
      </Card.Info>
      <Card.Main>
        <img src="./images/main-section-state-enabled.png" alt="" />
      </Card.Main>
      </ContentWrapper>
    </Card>
  );
  

};


const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const ContentWrapper = styled.div`
display: flex;
padding-top: 64px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 56px;
border-radius: 20px;
border: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
background: ${({ theme: { palette } }) => palette.background.bg_000};
`

const meta: Meta<typeof CardComponent> = {
  title: '',
  component: CardComponent,
}

export default meta

type TCardStory = StoryObj<typeof CardComponent>

export const Default: TCardStory = {
  render: args => <CardComponent {...args} />,
  args: {},
}
