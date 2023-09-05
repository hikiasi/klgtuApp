import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components';
import { TextInput } from '.';
import { IconButton } from '..';
import { TIconsList } from '../../atoms';


type TInputComponent = {
  icon1: TIconsList,
  icon2: TIconsList,
  text1: string,
  text2: string
}

const InputComponent = ({
  text1,
  text2,
  icon1,
  icon2,
}: TInputComponent
) => {
  return (
    <Wrapper>
      <TextInput
        icon={icon1}
        value={text1}
        onChange={() => { }}
      />
      <CustomTextInput
        icon={icon2}
        onChange={() => { }}
        value={text2}
        button={
          <IconButton
            icon='copy'
            width={19.2}
            height={19.2}
            variant='filled'
            form='square'
          />
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
const CustomTextInput = styled(TextInput)`
  padding: 4px 4px 4px 12px;
`

const meta: Meta<typeof InputComponent> = {
  title: '',
  component: InputComponent,
}

export default meta

type TTextInputStory = StoryObj<typeof InputComponent>


export const Default: TTextInputStory = {
  render: args => <InputComponent {...args} />,
  args: {
    icon1: 'search',
    icon2: 'link',
    text1: 'test1',
    text2: 'test2',
  },
}
