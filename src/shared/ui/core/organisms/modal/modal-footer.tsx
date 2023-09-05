import { ReactNode } from "react";
import styled from "styled-components";

export type TModalFooter = {
  children?: ReactNode
}

const ModalFooter = ({ children }: TModalFooter) => {
  return (
    <Footer>
      {children}
    </Footer>
  );
};

const Footer = styled.div`
  padding: 0px 16px 16px 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`

export default ModalFooter
