import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type THeaderBrand = {
  children?: ReactNode
}

const HeaderBrand = forwardRef<HTMLDivElement, THeaderBrand>((
  {
    children,
    ...props
  }: THeaderBrand,
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

export default HeaderBrand
