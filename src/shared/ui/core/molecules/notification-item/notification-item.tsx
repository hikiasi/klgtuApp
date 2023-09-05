import styled from "styled-components";
import { IconInfoCircle, Typography } from "../../atoms";
import { IconButton } from "../icon-button";
import { keyframes } from "styled-components";
import { forwardRef } from "react";

export type TNotificationItem = {
  isPicked?: boolean,
  autoCloseTime?: number,
  text: string,
  onClose: () => void
}

export const NotificationItem = forwardRef<HTMLDivElement, TNotificationItem>(({
  text,
  isPicked,
  onClose,
  autoCloseTime = 10,
  ...props
}, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      {isPicked &&
        <Redline timer={autoCloseTime} />
      }
      <IconInfoCircle
      />
      <Typography>
        {text}
      </Typography>
      <XCloseWrapper>
        <IconButton
          icon='xClose'
          variant="transparent"
          onClick={onClose}
        />
      </XCloseWrapper>
    </Wrapper>
  );
});


const Wrapper = styled.div`
  position: relative;
  padding: 24px;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0, .1);
`
const XCloseWrapper = styled.div`
  display: flex;
  margin-left: auto;
`

type TRedline = {
  timer: number
}
const vanishing = keyframes`
  from {
    width: calc(100% - 48px)
  }
  to {
    width: 0;
  }
`
const Redline = styled.div<TRedline>`
  margin-right: auto;
  position: absolute;
  top: 0;
  left: 24px;
  height: 4px;
  background: ${({ theme: { palette } }) => palette.system.error_500};
  border-radius: 0px 0px 2px 2px;
  animation: ${vanishing} ${({ timer }) => `${timer}s`} linear;
`

