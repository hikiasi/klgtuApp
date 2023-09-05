import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type THeader = {
  children: ReactNode
}

const Header = forwardRef<HTMLDivElement, THeader>((
  {
    children,
    ...props
  }: THeader,
  ref
) => {

  return (
    <HeaderWrapper {...props} ref={ref}>
      {children}
    </HeaderWrapper>
  );
});

const HeaderWrapper = styled.header`
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

export default Header
