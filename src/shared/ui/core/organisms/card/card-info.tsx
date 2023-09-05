import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

type TCardInfo = {
  children?: ReactNode
}

const CardInfo = forwardRef<HTMLDivElement, TCardInfo>((
  {
    children,
    ...props
  }: TCardInfo,
  ref
) => {
  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export default CardInfo
