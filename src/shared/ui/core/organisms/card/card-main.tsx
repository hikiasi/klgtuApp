import { ReactNode } from "react";
import styled from "styled-components";

type TCardMain = {
  children?: ReactNode;
};

const CardMain = ({ children }: TCardMain) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`

`;

export default CardMain;
