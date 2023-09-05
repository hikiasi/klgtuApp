import styled from "styled-components";
import { ReactNode } from "react";

export type TFooter = {
  children?: ReactNode
}

const Footer = ({ children }: TFooter) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  width: 100%;
  height: 64px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  box-shadow: 0px 5px 16px 0px rgba(0,0,0, .1);
`


export default Footer
