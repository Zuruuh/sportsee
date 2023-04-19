import { useMemo, type FC } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

const DailyActivity: FC = () => {
  const activities = useMemo(() => {
    const data = {
      data: {
        sessions: [
          {
            day: '2020-07-01',
            kilogram: 70,
            calories: 240,
          },
          {
            day: '2020-07-02',
            kilogram: 69,
            calories: 220,
          },
          {
            day: '2020-07-03',
            kilogram: 70,
            calories: 280,
          },
          {
            day: '2020-07-04',
            kilogram: 70,
            calories: 500,
          },
          {
            day: '2020-07-05',
            kilogram: 69,
            calories: 160,
          },
          {
            day: '2020-07-06',
            kilogram: 69,
            calories: 162,
          },
          {
            day: '2020-07-07',
            kilogram: 69,
            calories: 390,
          },
        ],
      },
    };

    return data.data.sessions.map(({ day, kilogram, calories }) => ({
      day,
      kg: kilogram,
      Kcal: calories,
    }));
  }, []);

  return (
    <ResponsiveContainer>
      <BarChart
        data={activities.map((session, index) => ({
          ...session,
          index: index + 1,
        }))}
      >
        <CartesianGrid
          strokeDasharray="2 2"
          stroke="#dedede"
          vertical={false}
        />
        <text
          x={80}
          y={20}
          fill="#000"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="15">Activité Quotidienne</tspan>
        </text>
        <XAxis dataKey="index" tickLine={false} axisLine={false} />
        <YAxis
          dataKey="Kcal"
          tickLine={false}
          axisLine={false}
          orientation="right"
          tickCount={3}
          ticks={useMemo(() => {
            const sortedActivities = activities.sort((a, b) =>
              a.Kcal > b.Kcal ? 1 : -1
            );
            const average = Math.floor(
              sortedActivities.reduce(
                (total, current) => total + current.Kcal,
                0
              ) / sortedActivities.length
            );

            return [
              Math.floor(average / 2),
              average,
              (sortedActivities.at(-1)?.Kcal ?? 0) + 3,
            ];
          }, [activities])}
        />
        <Tooltip
          separator=""
          formatter={(value, name) => ['', `${value}${name}`]}
          labelFormatter={() => ''}
          contentStyle={{ backgroundColor: '#FF0101' }}
          itemStyle={{ color: '#fff' }}
        />
        <Bar
          dataKey="kg"
          fill="#000"
          width={7}
          radius={[3, 3, 0, 0]}
          barSize={10}
        />
        <Bar
          dataKey="Kcal"
          fill="#E60000"
          width={7}
          radius={[3, 3, 0, 0]}
          barSize={10}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          className="text-sm xl:text-lg"
          formatter={(label: string) => (
            <>
              {{ kg: 'Poids', Kcal: 'Calories brûlées' }[label]} ({label})
            </>
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyActivity;
