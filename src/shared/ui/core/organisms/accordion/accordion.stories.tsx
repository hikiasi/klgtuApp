import { Meta, StoryObj } from '@storybook/react'
import Accordion from '.';

type TAccordionComponent = {

}

const AccordionComponent = ({ }: TAccordionComponent) => {
  return (
    <Accordion defaultActiveKey='1'>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          asdfasdfasdf
        </Accordion.Header>
        <Accordion.Body>
          asdfasdfas
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          asdfasfbv
        </Accordion.Header>
        <Accordion.Body>
          asdfas
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};


const meta: Meta<typeof AccordionComponent> = {
  title: '',
  component: AccordionComponent,
}

export default meta

type TAccordionComponentStory = StoryObj<typeof AccordionComponent>

export const Default: TAccordionComponentStory = {
  render: args => <AccordionComponent {...args} />,
  args: {},
}
