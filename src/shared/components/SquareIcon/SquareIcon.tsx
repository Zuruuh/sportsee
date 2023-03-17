import { type FC } from 'react';
import PropTypes from 'prop-types';
import type { HexColor } from '~/shared/types/HexColor';
import HexColorValidator from '~/shared/validator/HexColorValidator';
import type { ReactSvgComponent } from '~/shared/types/ReactSVGComponent';

export interface SquareIconProps {
  iconColor: HexColor;
  backgroundColor: HexColor;
  icon: ReactSvgComponent;
  alt: string;
}

const SquareIcon: FC<SquareIconProps> = ({
  iconColor,
  backgroundColor,
  icon: Icon,
  alt,
}) => {
  return (
    <div
      aria-label={alt}
      className="flex h-16 w-16 items-center justify-center rounded-md"
      style={{
        backgroundColor,
      }}
    >
      {
        <Icon
          style={{
            fill: iconColor,
          }}
        />
      }
    </div>
  );
};

SquareIcon.propTypes = {
  iconColor: HexColorValidator,
  backgroundColor: HexColorValidator,
  icon: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SquareIcon;
