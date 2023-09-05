import styled, { useTheme } from "styled-components";
import { IconCheck, IconsList, TIconsList, Typography } from "../../atoms";
import { forwardRef } from "react";

export type TListItem = {
  onClick?: () => void,
  text: string,
  icon?: TIconsList,
  showIcon?: boolean,
  isPicked?: boolean,
  type?: 'default' | 'small'
}

export const ListItem = forwardRef<HTMLDivElement, TListItem>(({
  text,
  onClick,
  isPicked = false,
  type = 'default',
  showIcon = false,
  icon,
  ...props
}, ref) => {
  const { palette } = useTheme()
  return (
    <Wrapper onClick={onClick} type={type} ref={ref} {...props}>
      <Typography
        variant={type === 'default' ? 'callout' : 'footnote'}
        type="light"
      >
        {text}
      </Typography>
      {isPicked &&
        <IconCheck
          color={palette.accent.primary_550}
          size={type === 'default' ? 22 : 16}
        />
      }
      {!isPicked && showIcon && icon &&
        <IconWrapper>
          {IconsList[icon]}
        </IconWrapper>
      }
    </Wrapper>
  );
});

type TWrapper = Required<Pick<TListItem, 'type'>>

const Wrapper = styled.div<TWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ type }) => type === 'default' ? `9px 24px 9px 16px` : `12px 11px`};
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.content.cnt_200};
  cursor: pointer;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  &:hover, &:active {
    border-color: ${({ theme: { palette } }) => palette.accent.primary_500_op12};
    background: ${({ theme: { palette } }) => palette.accent.primary_500_op12};
  };
`
const IconWrapper = styled.div`
  & svg {
    width: 22px;
    height: 22px;
  }
  & svg path {
    fill: ${({ theme: { palette } }) => palette.content.cnt_100};
  }
`
