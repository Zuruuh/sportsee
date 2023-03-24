import type { ReactSvgComponent } from '~/shared/types/ReactSVGComponent';

export interface SquareIconProps {
  color: SquareIconColor;
  icon: ReactSvgComponent;
  alt: string;
}

const SQUARE_ICON_COLORS = {
  PRIMARY: 'primary',
  RED: 'red',
  BLUE: 'blue',
  YELLOW: 'yellow',
  PINK: 'pink',
} as const;

Object.freeze(SQUARE_ICON_COLORS);

export { SQUARE_ICON_COLORS };

export type SquareIconColor =
  (typeof SQUARE_ICON_COLORS)[keyof typeof SQUARE_ICON_COLORS];

export const SquareIconColorMap: Record<
  SquareIconColor,
  { backgroundColor?: string; color: string }
> = {
  [SQUARE_ICON_COLORS.PRIMARY]: {
    backgroundColor: '#FBF9F9',
    color: '#FF0101',
  },
  [SQUARE_ICON_COLORS.RED]: { color: '#FF0000' },
  [SQUARE_ICON_COLORS.BLUE]: { color: '#4AB8FF' },
  [SQUARE_ICON_COLORS.YELLOW]: { color: '#FDCC0C' },
  [SQUARE_ICON_COLORS.PINK]: { color: '#FD5181' },
};
