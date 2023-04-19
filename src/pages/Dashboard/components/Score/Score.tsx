import { type FC } from 'react';
import PropTypes from 'prop-types';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

export interface ScoreProps {
  score: number;
}

const Score: FC<ScoreProps> = ({ score }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="bg-[#FBFBFB]">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        startAngle={90}
        endAngle={90 + 360 * score}
        barSize={10}
        data={[{ score }]}
      >
        <text
          x={40}
          y={30}
          fill="#000"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="15">Score</tspan>
        </text>
        <RadialBar
          fill="#ff0000"
          widths={10}
          dataKey="score"
          cornerRadius="50%"
        />
        <text
          x="50%"
          y="35%"
          alignmentBaseline="central"
          fill="#000"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <tspan dy="1.2em" fontSize="26">
            {score * 100}%
          </tspan>
        </text>
        <text
          x="50%"
          y="50%"
          alignmentBaseline="central"
          fill="#74798C"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <tspan x="50%" dy="1.2em">
            de votre
          </tspan>
          <tspan x="50%" dy="1.2em">
            objectif
          </tspan>
        </text>
        {/* <PolarAngleAxis /> */}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
