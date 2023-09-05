import { HTMLAttributes, ReactNode, forwardRef } from "react";
import styled from "styled-components";

export type TModalDialog = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode,
}

const ModalDialog = forwardRef<HTMLDivElement, TModalDialog>((
  {
    children,
    ...props
  }: TModalDialog,
  ref) => {
  return (
    <Wrapper {...props} ref={ref}>
      {children}
    </Wrapper>
  );
}
)

const Wrapper = styled.div`

`

export default ModalDialog
