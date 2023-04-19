import { type ReactNode, type FC } from 'react';
import PropTypes from 'prop-types';

export interface SquareChartProps {
  children: ReactNode;
}

const SquareChart: FC<SquareChartProps> = ({ children }) => {
  return (
    <div className="m-2 h-64 w-full overflow-hidden rounded-md xl:aspect-square xl:h-auto xl:w-1/3">
      {children}
    </div>
  );
};

SquareChart.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SquareChart;
