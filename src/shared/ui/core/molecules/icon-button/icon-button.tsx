import styled from "styled-components";
import { IconsList, TIconsList } from "../../atoms";
import { forwardRef } from "react";

export type TIconButton = {
  onClick?: () => void,
  variant?: 'filled' | 'transparent' | 'tonal',
  form?: 'ellipse' | 'square',
  isDisable?: boolean,
  icon: TIconsList,
  width?: number,
  height?: number,
  padding?: boolean,
}

export const IconButton = forwardRef<HTMLButtonElement, TIconButton>(({
  onClick,
  icon,
  isDisable = false,
  variant = 'filled',
  form = 'ellipse',
  width = 24,
  height = 24,
  padding = true,
  ...props
}, ref) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      isDisable={isDisable}
      variant={variant}
      form={form}
      disabled={isDisable}
      height={height}
      width={width}
      padding={padding}
      ref={ref}
      {...props}
    >
      {IconsList[icon]}
    </ButtonWrapper>
  );
});

type TButtonWrapper = Required<Pick<TIconButton, 'variant' | 'isDisable' | 'form' | 'width' | 'height' | 'padding'>>

const ButtonWrapper = styled.button<TButtonWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => !padding ? `0px` : `8px`};
  border-radius: ${({ form }) => form === 'square' ? `8px` : `50%`};
  border: none;
  cursor: pointer;
  background: ${({ theme: { palette }, variant, isDisable }) => {
    let bg = palette.accent.primary_500;
    if (variant === 'tonal') {
      bg = palette.accent.primary_500_op12
    }
    if (isDisable) {
      if (variant === 'tonal') {
        bg = palette.background.bg_050
      }
      else {
        bg = palette.background.bg_150
      }
    }
    if (variant === 'transparent') {
      bg = 'transparent'
    }
    return bg
  }};
  &:hover {
    background: ${({ theme: { palette }, variant, isDisable }) => {
    if (variant === 'filled' && !isDisable) {
      return palette.accent.primary_550
    }
    return ''
  }};
  };
  & svg {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  };
  & svg path {
    fill: ${({ theme: { palette }, isDisable, variant }) => {
    let bg = palette.content.cnt_000
    if (variant === 'filled') {
      bg = palette.content.cnt_const_white
    }
    else if (variant === 'tonal') {
      bg = palette.accent.primary_500
    }
    if (isDisable) {
      if (variant === 'transparent') {
        bg = palette.content.cnt_100
      }
      if (variant === 'filled') {
        bg = palette.content.cnt_050
      }
      if (variant === 'tonal') {
        bg = palette.content.cnt_150
      }
    }
    return bg
  }}
  };
  &:active svg path {
    fill: ${({ theme: { palette }, variant }) => {
    if (variant === 'transparent') {
      return palette.accent.primary_500
    }
    return ''
  }}
  }
`
