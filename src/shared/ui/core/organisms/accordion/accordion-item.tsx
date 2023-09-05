import styled from "styled-components";
import AccordionItemContext, { AccordioItemContextValue } from "./accordion-item-context";
import { ReactNode, forwardRef, useMemo } from "react";

export type TAccordionItem = {
  eventKey: string,
  children: ReactNode
}

const AccordionItem = forwardRef<HTMLDivElement, TAccordionItem>(({
  eventKey,
  children,
  ...props
}, ref) => {
  const contextValue = useMemo<AccordioItemContextValue>(() => ({
    eventKey
  }), [eventKey])
  return (
    <AccordionItemContext.Provider value={contextValue}>
      <Wrapper ref={ref} {...props}>
        {children}
      </Wrapper>
    </AccordionItemContext.Provider>
  );
});

const Wrapper = styled.div`

`

export default AccordionItem
