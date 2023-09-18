import { Meta, StoryObj } from '@storybook/react'
import Accordion from '.';

type TAccordionComponent = {

}

const AccordionComponent = ({ }: TAccordionComponent) => {
  return (
    <Accordion defaultActiveKey='1'>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          Проверка1
        </Accordion.Header>
        <Accordion.Body>
          Проверка11
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          Проверка2
        </Accordion.Header>
        <Accordion.Body>
          Проверка22
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
