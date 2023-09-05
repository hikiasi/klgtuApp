import { ReactNode } from "react";
import styled from "styled-components";

type TFooterBody = {
  children?: ReactNode
}

const FooterBody = ({ children }: TFooterBody) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`

export default FooterBody
