import {
  ReactNode,
  SyntheticEvent,
  forwardRef,
  useContext,
  useEffect,
} from "react";
import styled, { css } from "styled-components";
import AccordionContext, {
  AccordionEventKey,
  isAccordionItemSelected,
} from "./accordion-select-context";
import { IconButton } from "../../molecules";
import AccordionItemContext from "./accordion-select-item-context";
import { Typography } from "../../atoms";

export type TAccordionHeader = {
  children: ReactNode;
  showButton?: boolean;
  onlyButtonClick?: boolean;
  onClick?: () => void;
  onActive?: () => void;
};

const AccordionHeader = forwardRef<HTMLDivElement, TAccordionHeader>(
  (
    {
      children,
      showButton = true,
      onlyButtonClick = false,
      onClick,
      onActive,
      ...props
    },
    ref
  ) => {
    const { eventKey } = useContext(AccordionItemContext);
    const accordionOnClick = accordionClick(eventKey, onClick);
    const { activeEventKey } = useContext(AccordionContext);
    const isHeaderActive = isAccordionItemSelected(activeEventKey, eventKey);

    useEffect(() => {
      if (
        Array.isArray(activeEventKey)
          ? activeEventKey.includes(eventKey)
          : eventKey === activeEventKey
      ) {
        onActive?.();
      }
    }, [eventKey, activeEventKey, onActive]);
    return (
      <Wrapper
        ref={ref}
        onClick={accordionOnClick}
        active={isHeaderActive}
        {...props}
      >
        <ContentWrapper>
          <Typography variant="title2" type="medium">
          {children}
          </Typography>
        </ContentWrapper>
        {showButton && (
          <AccordionButton
            icon="chevronDown"
            form="ellipse"
            variant="transparent"
            width={32}
            height={32}
            isCollapsed={isHeaderActive}
            onClick={() => accordionOnClick}
          />
        )}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  padding: 24px 32px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  ${({ active }) =>
    active &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 0;
    `}
`;

const ContentWrapper = styled.div``;
type TButton = {
  isCollapsed: boolean;
};
const AccordionButton = styled(IconButton)<TButton>`
  & svg {
    transform: ${({ isCollapsed }) => isCollapsed && `rotate(360deg)`};
  }
`;

type EventHandler = React.EventHandler<SyntheticEvent>;

const accordionClick = (
  eventKey: string,
  onClick?: EventHandler
): EventHandler => {
  const { activeEventKey, alwaysOpen, onSelect } = useContext(AccordionContext);
  return (e) => {
    let eventKeyPassed: AccordionEventKey =
      eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        eventKeyPassed = [eventKey];
      }
    }
    onSelect?.(eventKeyPassed, e);
    onClick?.(e);
  };
};

export default AccordionHeader;
