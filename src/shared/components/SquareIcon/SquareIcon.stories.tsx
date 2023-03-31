import type { StoryDefault, Story } from '@ladle/react';
import SquareIcon, {
  SQUARE_ICON_COLORS,
  SquareIconProps,
} from '~/shared/components/SquareIcon';
import { ReactComponent as SVGIcon } from './fixtures/bicycle.svg';

export default {
  title: 'Components/SquareIcon',
} satisfies StoryDefault<SquareIconProps>;

export const Primary: Story = () => (
  <SquareIcon
    alt="My label"
    icon={SVGIcon}
    color={SQUARE_ICON_COLORS.PRIMARY}
  />
);

export const Red: Story = () => (
  <SquareIcon alt="My label" icon={SVGIcon} color={SQUARE_ICON_COLORS.RED} />
);

export const Blue: Story = () => (
  <SquareIcon alt="My label" icon={SVGIcon} color={SQUARE_ICON_COLORS.BLUE} />
);

export const Yellow: Story = () => (
  <SquareIcon alt="My label" icon={SVGIcon} color={SQUARE_ICON_COLORS.YELLOW} />
);

export const Pink: Story = () => (
  <SquareIcon alt="My label" icon={SVGIcon} color={SQUARE_ICON_COLORS.PINK} />
);
