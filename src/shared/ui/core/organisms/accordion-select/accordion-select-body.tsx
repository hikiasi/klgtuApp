import { ReactNode, forwardRef, useContext } from "react";
import AccordionCollapse from "./accordion-select-collapse";
import styled from "styled-components";
import AccordionItemContext from "./accordion-select-item-context";

export type TAccordionBody = {
  children: ReactNode
}

const AccordionBody = forwardRef<HTMLDivElement, TAccordionBody>(({
  children,
  ...props
}, ref) => {
  const { eventKey } = useContext(AccordionItemContext)
  return (
    <AccordionCollapse
      eventKey={eventKey}>
      <Wrapper
        ref={ref}
        {...props}>
        {children}
      </Wrapper>
    </AccordionCollapse>
  );
})

const Wrapper = styled.div`
  min-height: 0;
  white-space: pre-line;
  margin-right: 32px
`

export default AccordionBody
