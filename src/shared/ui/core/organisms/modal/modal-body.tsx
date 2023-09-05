import { ReactNode } from "react";
import styled from "styled-components";

export type TModalBody = {
  children?: ReactNode
}

const ModalBody = ({ children }: TModalBody) => {
  return (
    <Body>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Body>
  );
};


const Body = styled.div`
  padding: 16px 16px 0px 16px;
  margin-bottom: 20px;
`
const ContentWrapper = styled.div`

`

export default ModalBody
