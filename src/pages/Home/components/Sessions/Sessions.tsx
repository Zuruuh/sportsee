import { type FC, useMemo, useEffect, useRef } from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { N } from 'ts-toolbelt';
import { z } from 'zod';
import {
  SessionQuery,
  type Session,
  WeekDay,
  SessionsQuerySchema,
} from '~/pages/Home/queries/Sessions';
import { useUser } from '~/shared/hooks/useUser';
import { useWrappedQuery } from '~/shared/query/useWrappedQuery';

const Sessions: FC = () => {
  const { id: userId } = useUser();
  const { data: rawSessions, doQuery } = useWrappedQuery(
    SessionQuery,
    useMemo(() => ({ userId }), [userId]),
    SessionsQuerySchema
  );

  useEffect(() => {
    doQuery();
  }, [doQuery]);

  const sessions = useMemo(() => {
    if (!rawSessions) return undefined;

    return rawSessions.data.sessions.map(
      (session): Session => ({
        length: session.sessionLength,
        day: (
          { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' } as Record<
            N.Range<1, 7, '->'>[number],
            z.infer<typeof WeekDay>
          >
        )[session.day as N.Range<1, 7, '->'>[number]],
      })
    );
  }, [rawSessions]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.backgroundColor = '#ff0000';
  }, [containerRef]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer>
        <LineChart
          data={sessions}
          style={{ borderRadius: 5 }}
          margin={{ bottom: 10, left: 10, right: 10 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#fff"
            tick={{
              stroke: '#fff',
              opacity: 0.6,
              fontSize: 24,
            }}
            allowDataOverflow={true}
          />
          <YAxis domain={[20, 'dataMax + 20']} dataKey={'length'} hide={true} />
          <Line
            type="monotone"
            dataKey="length"
            stroke="#fff"
            fill="#ff0000"
            strokeWidth={2}
            dot={false}
            activeDot={{ fill: '#fff', r: 4, strokeWidth: 4 }}
            // onMouseOver={(_props: CurveProps, event: MouseEvent) => {
            //   if (!containerRef.current) return;
            //   console.log(_props.points);
            //   // document.querySelector('.recharts-layer.recharts-active-dot')

            //   const width = containerRef.current.clientWidth;
            //   const offset =
            //     event.clientX -
            //     (event.target as HTMLElement).getBoundingClientRect().left;
            //   const pixelOffset = Math.floor((width / 100) * offset);
            //   console.log(pixelOffset);
            // }}
          />
          <Tooltip
            separator=" "
            labelFormatter={() => ''}
            formatter={(value) => ['mins', String(value)]}
            contentStyle={{ backgroundColor: '#fff' }}
            itemStyle={{ color: '#000' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// 250

export default Sessions;
