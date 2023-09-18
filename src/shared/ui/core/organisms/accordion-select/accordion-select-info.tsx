import { ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { Typography } from "../../atoms";

export type TAccordionInfo = {
  children: ReactNode;
};

const AccordionInfo = forwardRef<HTMLDivElement, TAccordionInfo>(
  ({ children, ...props }, ref) => {
    return (
        <Wrapper ref={ref} {...props}>
          <Typography variant="body" type="light">
            {children}
          </Typography>
        </Wrapper>
    );
  }
);

const Wrapper = styled.div``;

export default AccordionInfo;
