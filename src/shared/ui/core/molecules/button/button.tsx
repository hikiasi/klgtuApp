import styled, { DefaultTheme } from "styled-components";
import { Typography, TIconsList, IconsList } from "../../atoms";
import { TypographyVariants } from "@shared/ui/theme";
import { forwardRef } from "react";

export type TButton = {
  text: string,
  onClick?: () => void,
  size?: 'large' | 'medium' | 'small',
  variant?: 'filled' | 'outlined' | 'text',
  isDisable?: boolean,
  icon?: TIconsList,
}

export const Button = forwardRef<HTMLButtonElement, TButton>(({
  text,
  isDisable = false,
  variant = 'filled',
  size = 'medium',
  icon,
  onClick,
  ...props
}, ref) => {
  const textSize: Record<typeof size, TypographyVariants> = {
    large: 'subheadline',
    medium: 'footnote',
    small: 'caption2',
  }
  return (
    <ButtonWrapper
      onClick={onClick}
      isDisable={isDisable}
      variant={variant}
      disabled={isDisable}
      size={size}
      ref={ref}
      {...props}
    >
      {icon && IconsList[icon]}
      <Typography
        type='medium'
        variant={textSize[size]}
      >
        {text}
      </Typography>
    </ButtonWrapper>
  );
});

type TButtonWrapper = Required<Pick<TButton, 'isDisable' | 'variant' | 'size'>>

const ButtonWrapper = styled.button<TButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '6px 10px'
      case 'medium':
        return '9px 14px'
      case 'large':
        return '10px 16px'
    }
  }};
  border-radius: 6px;
  background: ${({ theme: { palette }, isDisable, variant }): string => {
    let color = isDisable ? palette.background.bg_150 : palette.accent.primary_500
    if (variant === 'outlined' || variant === 'text') {
      color = 'transparent'
    }
    return color
  }};
  border: ${({ theme: { palette }, variant, isDisable }) => variant === 'outlined' ?
    isDisable ? `1px solid ${palette.background.bg_150}` : `1px solid ${palette.accent.primary_500}`
    :
    'none'
  };
  cursor: pointer;
  &:active {
    box-shadow: ${({ theme: { palette }, isDisable, variant }) => !isDisable && variant !== 'text' && `0px 0px 0px 2px ${palette.accent.primary_500_op12}`};
  };
  &:hover {
    background: ${({ theme: { palette }, isDisable, variant }) => {
    if (variant === 'filled' && !isDisable) {
      return palette.accent.primary_550
    }
    return ''
  }};
  };
  & ${Typography} {
  color: ${({ theme, isDisable, variant }) => setColor(theme, { isDisable, variant })};
  };
  &:hover ${Typography} {
    color: ${({ theme: { palette }, isDisable, variant }) => {
    let cl = palette.accent.primary_550
    if (variant === 'filled') {
      cl = palette.content.cnt_const_white
    }
    if (isDisable) {
      cl = palette.content.cnt_050
    }
    return cl
  }};
  };
  &:active ${Typography}{
    color: ${({ theme, isDisable, variant }) => setColor(theme, { isDisable, variant })}
  };
  & svg {
    width: ${({ size }) => pxBySize({ size })};
    height: ${({ size }) => pxBySize({ size })};
  }
  & svg path {
    fill: ${({ theme, isDisable, variant }) => setColor(theme, { isDisable, variant })}
  };
  &:hover svg path {
    fill: ${({ theme: { palette }, isDisable, variant }) => {
    let cl = palette.accent.primary_550
    if (variant === 'filled') {
      cl = palette.content.cnt_const_white
    }
    if (isDisable) {
      cl = palette.content.cnt_050
    }
    return cl
  }}
  };
`

const setColor = ({ palette }: DefaultTheme, { variant, isDisable }: Required<Pick<TButton, 'variant' | 'isDisable'>>): string => {
  let cl = palette.accent.primary_500;
  if (variant === 'filled') {
    cl = palette.content.cnt_const_white
  }
  if (isDisable) {
    cl = palette.content.cnt_050
  }
  return cl
}
const pxBySize = ({ size }: Required<Pick<TButton, 'size'>>): string => {
  let s = 0
  switch (size) {
    case 'small':
      s = 12
      break
    case 'medium':
      s = 14
      break
    case 'large':
      s = 16
      break
  }
  return `${s}px`
}
