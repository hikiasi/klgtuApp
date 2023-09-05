import { Meta, StoryObj } from '@storybook/react'
import Modal from '.'
import { Button } from '../../molecules'
import styled from 'styled-components'

type TModalComp = {
  contentWidth: number,
  contentHeight: number,
  backdrop: boolean
}

const ModalComp = ({ backdrop, contentWidth, contentHeight }: TModalComp) => {
  return (
    <Modal show={true} backdrop={backdrop}>
      <Modal.Header>
        <Modal.Title>
          Test
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Content width={contentWidth} height={contentHeight}>
          Содержимое компонента
        </Content>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outlined'
          icon='plus'
          size='medium'
          text='ButtonText'
        />
        <Button
          variant='filled'
          icon='plus'
          size='medium'
          text='ButtonText'
        />
      </Modal.Footer>
    </Modal>
  )
}
type TContent = {
  width: number,
  height: number,
}
const Content = styled.div<TContent>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ theme: { palette } }) => palette.content.cnt_100};
  background: ${({ theme: { palette } }) => palette.content.cnt_150};
  border-radius: 6px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`}
`

const meta: Meta<typeof ModalComp> = {
  title: '',
  component: ModalComp,
}

export default meta

type TModalStory = StoryObj<typeof ModalComp>

export const Default: TModalStory = {
  render: args => <ModalComp {...args} />,
  args: {
    backdrop: false,
    contentWidth: 367,
    contentHeight: 80,
  },
}
