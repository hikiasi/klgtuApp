import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type THeaderActivities = {
  children?: ReactNode
}

const HeaderActivities = forwardRef<HTMLDivElement, THeaderActivities>((
  {
    children,
    ...props
  }: THeaderActivities,
  ref
) => {
  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
});

const Wrapper = styled.div`

`

export default HeaderActivities
