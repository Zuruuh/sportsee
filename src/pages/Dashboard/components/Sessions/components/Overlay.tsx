import { type FC } from 'react';
import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';

export interface OverlayProps {
  width: number;
  height: number;
  offset: number;
}

const Overlay: FC<OverlayProps> = ({ width, height, offset }) => {
  return (
    <Rectangle
      pointerEvents="none"
      fill="rgba(0,0,0,0.1)"
      stroke="none"
      width={width}
      height={height}
      x={offset}
      y={0}
    />
  );
};

Overlay.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default Overlay;
