import { ReactNode, SyntheticEvent, forwardRef, useContext, useEffect } from "react";
import styled from "styled-components";
import AccordionContext, { AccordionEventKey, isAccordionItemSelected } from "./accordion-context";
import { IconButton } from "../../molecules";
import AccordionItemContext from "./accordion-item-context";

export type TAccordionHeader = {
  children: ReactNode,
  showButton?: boolean,
  onlyButtonClick?: boolean,
  onClick?: () => void,
  onActive?: () => void
}

const AccordionHeader = forwardRef<HTMLDivElement, TAccordionHeader>(({
  children,
  showButton = true,
  onlyButtonClick = false,
  onClick,
  onActive,
  ...props
}, ref) => {
  const { eventKey } = useContext(AccordionItemContext)
  const accordionOnClick = accordionClick(eventKey, onClick)
  const { activeEventKey } = useContext(AccordionContext)
  useEffect(() => {
    if (Array.isArray(activeEventKey)
      ? activeEventKey.includes(eventKey)
      : eventKey === activeEventKey) {
      onActive?.()
    }
  }, [eventKey, activeEventKey, onActive])
  return (
    <Wrapper
      ref={ref}
      onClick={accordionOnClick}
      {...props}
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
      {showButton && (
        <AccordionButton
          icon="chevronDown"
          form="square"
          variant="tonal"
          isCollapsed={isAccordionItemSelected(activeEventKey, eventKey)}
          onClick={() => accordionOnClick}
        />
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const ContentWrapper = styled.div`

`
type TButton = {
  isCollapsed: boolean
}
const AccordionButton = styled(IconButton) <TButton>`
  & svg {
    transform: ${({ isCollapsed }) => isCollapsed && `rotate(360deg)`};
  }
`

type EventHandler = React.EventHandler<SyntheticEvent>

const accordionClick = (eventKey: string, onClick?: EventHandler): EventHandler => {
  const { activeEventKey, alwaysOpen, onSelect } = useContext(AccordionContext)
  return (e) => {
    let eventKeyPassed: AccordionEventKey = eventKey === activeEventKey ? null : eventKey
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter(k => k !== eventKey)
        } else {
          eventKeyPassed = [...activeEventKey, eventKey]
        }
      } else {
        eventKeyPassed = [eventKey]
      }
    }
    onSelect?.(eventKeyPassed, e)
    onClick?.(e)
  }
}

export default AccordionHeader
