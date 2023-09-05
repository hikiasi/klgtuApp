import { ReactNode } from "react";
import styled from "styled-components";

type TFooterActivities = {
  children?: ReactNode
}

const FooterActivities = ({ children }: TFooterActivities) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};



const Wrapper = styled.div`
`

export default FooterActivities
