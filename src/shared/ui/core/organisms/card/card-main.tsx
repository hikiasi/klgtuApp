import { ReactNode } from "react";
import styled from "styled-components";

type TCardMain = {
  children?: ReactNode;
};

const CardMain = ({ children }: TCardMain) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  & img {
    width: 100%;
    height: auto;
    opacity: 0.33;
    background: 50% / cover no-repeat;
    mix-blend-mode: luminosity;
    display: block;
    border-radius: 0 0 20px 20px;
    transition: .3s ease all;
  }
  &:hover img,
  &:focus img {
    opacity: 0.8;
    mix-blend-mode: normal;
    background: url("./images/main-section-state-hovered-focused.png") 50% / cover no-repeat;
  }
`;

export default CardMain;
