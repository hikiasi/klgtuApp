import styled, { css } from 'styled-components';
import { TypographyVariants } from '@shared/ui/theme/types';

type TTypographyProps = {
  variant?: TypographyVariants;
  type?: 'light' | 'medium' | 'bold'
  color?: string
};

const fontWeight = {
  'light': 300,
  'medium': 500,
  'bold': 700,
}

export const Typography = styled.p.attrs(() => ({

})) <TTypographyProps>`
  ${({ theme: { typography, palette }, variant = 'body', color, type = 'medium' }) => css`
    font-family: ${typography[variant].fontFamily};
    line-height: ${typography[variant].lineHeight};
    font-size: ${typography[variant].size};
    color: ${color ?? palette.text.primary};
    font-weight: ${fontWeight[type]};
  `}
`;
