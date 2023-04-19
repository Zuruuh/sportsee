import { useMemo, type FC, useEffect } from 'react';
import type { N } from 'ts-toolbelt';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useWrappedQuery } from '~/shared/query/useWrappedQuery';
import {
  PerformanceQuery,
  PerformanceSchema,
} from '~/pages/Home/queries/Performance';
import { useUser } from '~/shared/hooks/useUser';

const Performances: FC = () => {
  const { id: userId } = useUser();
  const { data: rawPerformances, doQuery } = useWrappedQuery(
    PerformanceQuery,
    useMemo(() => ({ userId }), [userId]),
    PerformanceSchema
  );

  useEffect(() => {
    doQuery();
  }, [doQuery]);

  const performances = useMemo(() => {
    if (!rawPerformances) return undefined;

    return rawPerformances.data.data.map((value) => ({
      ...value,
      kind: {
        cardio: 'Cardio',
        intensity: 'Intensité',
        speed: 'Vitesse',
        strength: 'Force',
        endurance: 'Endurance',
        energy: 'Energie',
      }[
        rawPerformances.data.kind[
          String(value.kind) as `${N.Range<1, 6, '->'>[number]}`
        ]
      ],
    }));
  }, [rawPerformances]);

  if (!performances) return <div>Loading...</div>;

  return (
    <ResponsiveContainer>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performances}
        className="bg-[#282D30]"
      >
        <PolarGrid stroke="#fff" strokeWidth={2} radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#fff"
          fontSize={12}
          strokeWidth={2}
          tickLine={false}
        />
        <Radar
          dataKey={'value'}
          fill="#FF0101"
          stroke="#FF0101"
          opacity="70%"
        />
        <Tooltip
          separator=""
          labelFormatter={() => ''}
          formatter={(value) => [value, '']}
          contentStyle={{ backgroundColor: '#FF0101' }}
          itemStyle={{ color: '#fff' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Performances;
