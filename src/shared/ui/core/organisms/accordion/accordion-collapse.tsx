import { Children, ReactNode, forwardRef, useContext } from "react";
import styled from "styled-components";
import AccordionContext, { isAccordionItemSelected } from "./accordion-context";

export type TAccordionCollapse = {
  children: ReactNode,
  eventKey: string,
}

const AccordionCollapse = forwardRef<HTMLDivElement, TAccordionCollapse>(({
  children,
  eventKey,
  ...props
}, ref) => {
  const { activeEventKey } = useContext(AccordionContext)
  return (
    <Collapse
      ref={ref}
      active={isAccordionItemSelected(activeEventKey, eventKey)}
      {...props}>
      {Children.only(children)}
    </Collapse>
  );
});


type TCollapse = {
  active: boolean
}

const Collapse = styled.div<TCollapse>`
  display: grid;
  grid-template-rows: ${({ active }) => active ? '1fr' : '0fr'};
  width: 100%;
  overflow: hidden;
  transition: grid-template-rows 0.2s ease-out;
`
export default AccordionCollapse
