import styled from "styled-components";
import { HTMLAttributes, KeyboardEvent, ReactNode, forwardRef, useEffect, useMemo } from "react";
import ModalContext from "./context";
import Dialog from "./modal-dialog";

export type TModal = HTMLAttributes<HTMLDivElement> & {
  scrollable?: boolean,
  keyboard?: boolean,
  backdrop?: boolean,
  autoFocus?: boolean,
  show: boolean,
  closeOnBackdrop?: boolean,
  onEscapeKeyDown?: (e: KeyboardEvent) => void,
  onHide?: () => void,
  onShow?: () => void,
  children?: ReactNode,
}

const Modal = forwardRef<HTMLDivElement, TModal>((
  {
    backdrop = true,
    autoFocus = true,
    scrollable = false,
    keyboard = true,
    onEscapeKeyDown,
    onHide,
    onShow,
    children,
    closeOnBackdrop = true,
    show,
    ...props
  }: TModal,
  ref) => {

  const handleHide = () => {
    if (!scrollable) {
      document.body.style.overflow = 'auto'
    }
    onHide?.()
  }
  const modalContext = useMemo(
    () => ({
      onHide: handleHide,
    }),
    [handleHide]
  )
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (keyboard && isEscKey(e)) {
      onEscapeKeyDown?.(e)
    }
    if (e!.defaultPrevented) {
      onHide?.()
    }
  }

  const handleShow = () => {
    if (!scrollable) {
      document.body.style.overflow = 'hidden'
    }
    onShow?.();
  }

  const renderDialog = () => (
    <Dialog ref={ref} {...props}>
      {children}
    </Dialog>
  )

  useEffect(() => {
    if (!show) return
    handleShow()
  }, [show])
  return (
    <ModalContext.Provider value={modalContext}>
      <Backdrop onMouseUp={handleHide} />
      <Wrapper onKeyDown={handleKeyDown} {...props}>
        {renderDialog()}
      </Wrapper>
    </ModalContext.Provider>
  );
});

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.2);
`

const isEscKey = (e: KeyboardEvent): boolean => {
  return e.code === 'Escape' || e.keyCode === 27;
}

export default Modal
