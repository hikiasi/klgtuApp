import styled from "styled-components";
import { ReactNode } from "react";

export type TMobileAppCard = {
  children?: ReactNode
}

const MobileAppCard = ({ children }: TMobileAppCard) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  
`


export default MobileAppCard
