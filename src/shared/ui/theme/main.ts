import { THEME_GRID_STEP } from './constants';

export const lightTheme = {
  name: 'default',
  palette: {
    accent: {
      primary_500: '#0193DE',
      primary_550: '#007FCA',
      primary_500_op12: '#0193DE12',
      primary_550_op12: '#007fca'
    },
    colourful: {
      orange_500: '#F2994A',
      red_500: '#EB5757',
      blue_500: '#2F80ED',
      green_500: '#27AE60',
      purple_500: '#9B51E0',
      gray_500: '#828282'
    },
    background: {
      bg_000: '#FFFFFF',
      bg_050: '#F9F9F9',
      bg_100: '#ECEDEE',
      bg_150: '#DADBDD',
      bg_200: '#C7C8CC',
      bg_250: '#B4B6BB'
    },
    content: {
      cnt_000: '#1A1C1E',
      cnt_050: '#72787F',
      cnt_100: '#999EA4',
      cnt_150: '#CED0D6',
      cnt_200: '#F0F2F5',
      cnt_const_white: '#FFFFFF',
      cnt_const_black: '#000000'
    },
    system: {
      theme_inverse_1: '#000000',
      theme_inverse_2: '#FFFFFF',
      success_500: '#34C759',
      success_500_op12: '#34C759',
      error_500: '#FF3B30',
      error_500_op12: '#FF3B30',
      shadow_layer_1: '#FFFFFF50',
    },
    text: {
      primary: '#000000',
      secondary: '#C2C1C6',
      tertiary: '#706D76',
    },
  },
  typography: {
    largeTitle: {
      size: '34px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    title1: {
      size: '28px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    title2: {
      size: '22px',
      lineHeight: '125%',
      fontFamily: 'Inter',
    },
    title3: {
      size: '20px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
    body: {
      size: '17px',
      lineHeight: '140%',
      fontFamily: 'Inter',
    },
    callout: {
      size: '16px',
      lineHeight: '133%',
      fontFamily: 'Inter',
    },
    subheadline: {
      size: '15px',
      lineHeight: '133%',
      fontFamily: 'Inter',
    },
    footnote: {
      size: '13px',
      lineHeight: '135%',
      fontFamily: 'Inter',
    },
    caption1: {
      size: '12px',
      lineHeight: '133%',
      fontFamily: 'Inter',
    },
    caption2: {
      size: '11px',
      lineHeight: '120%',
      fontFamily: 'Inter',
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
