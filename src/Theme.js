export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media print',
};

export default {
  // 색상
  color: {
    primary: '#212121', // 주 색상
    pLight: '#484848',
    pDark: '#000000',
    secondary: '#f50057', // 부 색상
    sLight: '#ff5983',
    sDark: '#bb002f',
    default: '#999999', // 기본 문자 색상
    error: '#FF0000', // 오류 색상
  },
  // 폰트 사이즈
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: '60px',
    lg: '54px',
    md: '36px',
    sm: '24px',
    xs: '18px',
  },
  // 길이 단위
  unit: 4,
  // 반응형 미디어 속성
  responsive,
};
