import { ReactNode, SyntheticEvent, forwardRef, useMemo, useState } from "react";
import styled from "styled-components";
import AccordionContext, { AccordionContextValue, AccordionEventKey, AccordionSelectCallback } from "./accordion-context";

export type TAccordion = {
  activeKey?: AccordionEventKey,
  defaultActiveKey?: AccordionEventKey,
  onSelect?: AccordionSelectCallback,
  alwaysOpen?: boolean,
  children?: ReactNode
}

const Accordion = forwardRef<HTMLDivElement, TAccordion>(({
  onSelect,
  activeKey,
  alwaysOpen,
  defaultActiveKey,
  children,
  ...props
}, ref) => {
  const [key, setKey] = useState(defaultActiveKey ? defaultActiveKey : activeKey)
  const selectHandler = (passedKey: AccordionEventKey, e: SyntheticEvent<unknown>) => {
    setKey(passedKey)
    onSelect?.(passedKey, e)
  }
  const contextValue = useMemo<AccordionContextValue>(() => ({
    alwaysOpen,
    onSelect: selectHandler,
    activeEventKey: key
  }), [key, selectHandler, onSelect, alwaysOpen])
  return (
    <AccordionContext.Provider value={contextValue}>
      <Wrapper ref={ref} {...props}>
        {children}
      </Wrapper>
    </AccordionContext.Provider>
  );
});

const Wrapper = styled.div`

`

export default Accordion
