import type { StoryDefault } from '@ladle/react';
import {
  SQUARE_ICON_COLORS,
  SquareIconProps,
} from '~/shared/components/SquareIcon/SquareIcon.types';
import { ReactComponent as SVGIcon } from './fixtures/bicycle.svg';

export default {
  title: 'New Title',
  args: {
    alt: 'My label',
    icon: SVGIcon,
    color: SQUARE_ICON_COLORS.PRIMARY,
  },
} satisfies StoryDefault<SquareIconProps>;
