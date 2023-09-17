import styled from "styled-components";
import { ReactNode } from "react";

export type TCard = {
  children?: ReactNode
}

const Card = ({ children }: TCard) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  
`


export default Card
