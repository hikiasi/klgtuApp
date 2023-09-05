import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type TFooterBrand = {
  children?: ReactNode
}

const FooterBrand = forwardRef<HTMLDivElement, TFooterBrand>(({ children, ...props }, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
});

const Wrapper = styled.div`

`

export default FooterBrand
