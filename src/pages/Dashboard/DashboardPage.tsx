import { useEffect, type FC, useMemo } from 'react';
import DailyActivity from './components/DailyActivity';
import Performances from './components/Performances';
import Sessions from './components/Sessions';
import SquareChart from './components/SquareChart/SquareChart';
import Score from './components/Score';
import { UserQuery, UserQuerySchema } from './queries/User';
import { useUser } from '~/shared/hooks/useUser';
import { useWrappedQuery } from '~/shared/query/useWrappedQuery';
import SquareIcon, {
  SQUARE_ICON_COLORS,
  SquareIconColor,
} from '~/shared/components/SquareIcon';
import type { ReactSvgComponent } from '~/shared/types/ReactSVGComponent';
import { ReactComponent as EnergyIcon } from './assets/energy.svg';
import { ReactComponent as ChickenIcon } from './assets/chicken.svg';
import { ReactComponent as AppleIcon } from './assets/apple.svg';
import { ReactComponent as CheeseburgerIcon } from './assets/cheeseburger.svg';

const keyDataToSquareIconMapping = {
  calorieCount: {
    backgroundColor: SQUARE_ICON_COLORS.RED,
    icon: EnergyIcon,
    unit: 'kCal',
    label: 'Calories',
  },
  proteinCount: {
    backgroundColor: SQUARE_ICON_COLORS.BLUE,
    icon: ChickenIcon,
    unit: 'g',
    label: 'Proteines',
  },
  carbohydrateCount: {
    backgroundColor: SQUARE_ICON_COLORS.YELLOW,
    icon: AppleIcon,
    unit: 'g',
    label: 'Glucides',
  },
  lipidCount: {
    backgroundColor: SQUARE_ICON_COLORS.PINK,
    icon: CheeseburgerIcon,
    unit: 'g',
    label: 'Lipides',
  },
} as Record<
  string,
  {
    backgroundColor: SquareIconColor;
    icon: ReactSvgComponent;
    unit: string;
    label: string;
  }
>;

const DashboardPage: FC = () => {
  const { id: userId } = useUser();
  const { doQuery, data, isLoading, isInitialized, isError } = useWrappedQuery(
    UserQuery,
    useMemo(() => ({ userId }), [userId]),
    UserQuerySchema
  );

  useEffect(() => {
    doQuery();
  }, [doQuery]);

  return (
    <div className="flex h-full w-full flex-col p-16 pt-6">
      {data?.data ? (
        <>
          <h2 className="text-5xl font-bold">
            Bonjour,{' '}
            <span className="text-primary">
              {data.data.userInfos.firstName}
            </span>
            <br />
          </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : (
        <span>Chargement...</span>
      )}
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="flex h-full w-full flex-col">
          <div className="flex h-full w-[90%] flex-col">
            <div className=" mb-4 h-80 w-full bg-[#FBFBFB] p-4 xl:h-80">
              <DailyActivity />
            </div>
            <div className="flex w-full flex-col xl:h-1/2 xl:flex-row">
              <SquareChart>
                <Sessions />
              </SquareChart>
              <SquareChart>
                <Performances />
              </SquareChart>
              {data?.data ? (
                <SquareChart>
                  <Score
                    score={Number(
                      'score' in data.data
                        ? data.data.score
                        : data.data.todayScore
                    )}
                  />
                </SquareChart>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-row flex-wrap justify-around gap-2 lg:w-[250px] lg:flex-col lg:flex-nowrap lg:justify-between">
          {isInitialized && !isLoading && !isError ? (
            Object.entries(data!.data.keyData).map(([key, value]) => {
              const { backgroundColor, unit, label, icon } =
                keyDataToSquareIconMapping[key];

              return (
                <div
                  key={key}
                  className="flex w-1/3 bg-[#FBFBFB] p-8 lg:w-auto"
                >
                  <SquareIcon alt={key} color={backgroundColor} icon={icon} />
                  <div className="ms-6 flex flex-col">
                    <span className="text-[20px] font-semibold">
                      {value.toLocaleString()}
                      {unit}
                    </span>
                    <span className="text-sm text-[#74798C]">{label}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
