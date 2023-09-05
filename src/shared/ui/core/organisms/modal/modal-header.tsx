import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { IconButton } from "../../molecules";
import ModalContext from "./context";

export type TModalHeader = {
  children?: ReactNode
  onHide?: () => void
}

const ModalHeader = ({ children, onHide }: TModalHeader) => {
  const context = useContext(ModalContext)
  const handleClick = () => {
    context?.onHide()
    onHide?.()
  }
  return (
    <Header>
      {children}
      <IconButton
        icon="xClose"
        variant="transparent"
        width={18}
        height={18}
        onClick={handleClick}
        padding={false}
      />
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
  padding: 16px;
  gap: 8px;
`

export default ModalHeader
