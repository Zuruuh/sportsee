import { useMemo, type FC } from 'react';
import PropTypes from 'prop-types';
import {
  SQUARE_ICON_COLORS,
  SquareIconColorMap,
  type SquareIconProps,
} from '~/shared/components/SquareIcon/SquareIcon.types';

const SquareIcon: FC<SquareIconProps> = ({ color, icon: Icon, alt }) => {
  const { backgroundColor, color: fill } = useMemo(
    () => SquareIconColorMap[color],
    [color]
  );

  return (
    <div
      aria-label={alt}
      className="flex h-16 w-16 items-center justify-center rounded-md"
      style={{
        backgroundColor: backgroundColor ?? fill + '1A',
      }}
    >
      {
        <Icon
          style={{
            fill,
          }}
        />
      }
    </div>
  );
};

SquareIcon.propTypes = {
  color: PropTypes.oneOf(Object.values(SQUARE_ICON_COLORS)).isRequired,
  icon: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SquareIcon;
