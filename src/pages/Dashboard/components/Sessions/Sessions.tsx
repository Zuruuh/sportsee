import {
  type FC,
  useMemo,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
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
} from './queries';
import { useUser } from '~/shared/hooks/useUser';
import { useWrappedQuery } from '~/shared/query/useWrappedQuery';
import Overlay from './components/Overlay';

const Sessions: FC = () => {
  const { id: userId } = useUser();
  const { data: rawSessions, doQuery } = useWrappedQuery(
    SessionQuery,
    useMemo(() => ({ userId }), [userId]),
    SessionsQuerySchema
  );
  const [overlayOffset, setOverlayOffset] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    doQuery();
  }, [doQuery]);

  const sessions = useMemo(() => {
    if (!rawSessions) return undefined;

    return rawSessions.data.sessions.map(
      (session): Session | (Session & { day: undefined }) => ({
        length: session.sessionLength,
        // Black magic to map a number to a week day initial
        day: (
          { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' } as Record<
            N.Range<1, 7, '->'>[number],
            z.infer<typeof WeekDay>
          >
        )[session.day as N.Range<1, 7, '->'>[number]],
      })
    );
  }, [rawSessions]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.backgroundColor = '#ff0000';
  }, [containerRef]);

  const moveOverlay = useCallback(() => {
    if (!containerRef.current) return;

    const activeDot = document.querySelector(
      '.recharts-layer.recharts-active-dot'
    );
    if (!activeDot) {
      setOverlayOffset(0);

      return;
    }

    setOverlayOffset(
      activeDot.getBoundingClientRect().x -
        containerRef.current.getBoundingClientRect().x
    );
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <ResponsiveContainer>
        <LineChart
          data={sessions}
          style={{ borderRadius: 5 }}
          margin={{ bottom: 10, left: 10, right: 10 }}
          onMouseMove={moveOverlay}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#fff"
            dy={5}
            tick={{
              stroke: '#fff',
              opacity: 0.6,
              fontSize: 12,
            }}
          />
          <YAxis domain={['dataMin', 'dataMax + 25']} dataKey="length" hide />
          <Line
            type="monotone"
            dataKey="length"
            stroke="#fff"
            fill="#ff0000"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: '#fff',
              r: 4,
              strokeWidth: 4,
            }}
          />
          <Tooltip
            separator=" "
            labelFormatter={() => ''}
            formatter={(value) => ['mins', String(value)]}
            wrapperStyle={{ pointerEvents: 'none' }}
            contentStyle={{ backgroundColor: '#fff' }}
            itemStyle={{ color: '#000' }}
            cursor={
              containerRef.current ? (
                <Overlay
                  width={containerRef.current.clientWidth}
                  height={containerRef.current.clientHeight}
                  offset={overlayOffset}
                />
              ) : (
                <></>
              )
            }
          />
          <text
            x="30"
            y="30"
            opacity={0.6}
            textAnchor="start"
            dominantBaseline="hanging"
            fill="white"
          >
            Durée moyenne des
          </text>
          <text
            x="30"
            y="50"
            textAnchor="start"
            opacity={0.6}
            dominantBaseline="hanging"
            fill="white"
          >
            sessions
          </text>{' '}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// 250

export default Sessions;
