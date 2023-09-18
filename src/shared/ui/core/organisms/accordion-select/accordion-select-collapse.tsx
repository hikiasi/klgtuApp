import {
  Children,
  ReactNode,
  forwardRef,
  useContext,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
import AccordionContext, {
  isAccordionItemSelected,
} from "./accordion-select-context";

export type TAccordionCollapse = {
  children: ReactNode;
  eventKey: string;
};

const AccordionCollapse = forwardRef<HTMLDivElement, TAccordionCollapse>(
  ({ children, eventKey, ...props }, ref) => {
    const { activeEventKey } = useContext(AccordionContext);
    const isActive = isAccordionItemSelected(activeEventKey, eventKey);

    const [opacity, setOpacity] = useState(isActive ? 1 : 0);

    useEffect(() => {
      setOpacity(isActive ? 1 : 0);
    }, [isActive]);
    return (
      <CollapseContainer>
        <Collapse ref={ref} active={isActive} {...props}>
          {Children.only(children)}
        </Collapse>
      </CollapseContainer>
    );
  }
);

type TCollapse = {
  active: boolean;
  isActive?: boolean;
};

const CollapseContainer = styled.div`
  display: grid;
  /* Add your grid styles here */
`;

const Collapse = styled.div<TCollapse>`
  width: 100%;
  transition: height 0.2s ease, transform 0.2s ease;
  height: ${({ active }) => (active ? "auto" : "0")};
  overflow: hidden;
  transform: ${({ active }) => (active ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;

  padding: ${({ active }) => (active ? "24px 32px" : "0")};
  padding-top: ${({ active }) => (active ? "0" : "0")};
  gap: ${({ active }) => (active ? "10px" : "0")};
  justify-content: ${({ active }) => (active ? "space-between" : "0")};
  align-items: ${({ active }) => (active ? "center" : "0")};
  cursor: ${({ active }) => (active ? "pointer" : "default")};
  border-radius: ${({ active }) => (active ? "0 0 20px 20px" : "0")};
  border: ${({ active, theme: { palette } }) =>
    active ? `1px solid ${palette.background.bg_150}` : "0"};
  border-top: ${({ active }) => (active ? "0" : "0")};
  background: ${({ active, theme: { palette } }) =>
    active ? palette.background.bg_000 : "transparent"};
`;
export default AccordionCollapse;
