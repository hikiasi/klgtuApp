import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type THeaderBody = {
  children?: ReactNode
}

const HeaderBody = forwardRef<HTMLDivElement, THeaderBody>((
  {
    children,
    ...props
  }: THeaderBody,
  ref) => {
  return (
    <Wrapper {...props} ref={ref}>
      {children}
    </Wrapper>
  );
});

const Wrapper = styled.div`

`

export default HeaderBody
