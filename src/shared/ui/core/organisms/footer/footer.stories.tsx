import { Meta, StoryObj } from '@storybook/react'
import styled, { useTheme } from 'styled-components';
import Footer from '.';
import { IconKLGTUApp, IconSlantedArrow, Typography } from '../../atoms';
import { IconButton } from '../../molecules';


type TFooterComponent = {

}

const FooterComponent = ({ }: TFooterComponent) => {
  const { palette } = useTheme()
  return (
    <Footer>
      <Footer.Brand>
        <IconKLGTUApp
          width={141}
          height={32}
        />
      </Footer.Brand>
      <Footer.Activities>
        <ActivitiesWrapper>
          <TextWrapper>
            <Typography
              variant="subheadline"
              type="medium"
            >
              Телеграм-канал с новостями
            </Typography>
            <IconSlantedArrow
              color={palette.accent.primary_500}
              direction="up"
              size={20}
            />
          </TextWrapper>
          <IconButton
            icon='straightArrowUp'
            variant='filled'
          />
        </ActivitiesWrapper>
      </Footer.Activities>
    </Footer>
  );
};


const ActivitiesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const meta: Meta<typeof FooterComponent> = {
  title: '',
  component: FooterComponent,
}

export default meta

type TFooterStory = StoryObj<typeof FooterComponent>

export const Default: TFooterStory = {
  render: args => <FooterComponent {...args} />,
  args: {},
}
