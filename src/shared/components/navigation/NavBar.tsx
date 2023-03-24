import { type ReactNode, type FC } from 'react';
import { ReactComponent as LogoIcon } from '~/shared/assets/logo.svg';
import { ReactComponent as YogaIcon } from './assets/yoga.svg';
import { ReactComponent as SwimmingIcon } from './assets/swimming.svg';
import { ReactComponent as BicycleIcon } from './assets/bicycle.svg';
import { ReactComponent as DumbellIcon } from './assets/dumbell.svg';
import NavLink from './components/NavLink';
import SquareIcon, { SQUARE_ICON_COLORS } from '~/shared/components/SquareIcon';

export interface NavBarProps {
  children: ReactNode;
}

const LINKS: string[] = ['Accueil', 'Profil', 'Réglage', 'Communauté'];

const ICONS: { icon: typeof YogaIcon; label: string }[] = [
  { icon: YogaIcon, label: 'yoga' },
  { icon: SwimmingIcon, label: 'swimming' },
  { icon: BicycleIcon, label: 'bicycle' },
  { icon: DumbellIcon, label: 'dumbell' },
];

const NavBar: FC<NavBarProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <nav className="box-border w-full bg-secondary p-4 px-7">
        <ul className="flex items-center justify-between">
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
          {LINKS.map((link) => (
            <NavLink key={link} to="/">
              <span>{link}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="flex h-full">
        <div className="flex h-full w-[117px] flex-col justify-between bg-secondary">
          <div></div>
          <ul className="flex h-max w-full flex-col items-center pb-12">
            {ICONS.map(({ icon, label }) => (
              <li key={label} className="mt-5">
                <SquareIcon
                  alt={label}
                  icon={icon}
                  color={SQUARE_ICON_COLORS.PRIMARY}
                />
              </li>
            ))}
          </ul>
          <span className="mb-28 w-max -translate-x-6 -rotate-90 text-sm text-text-secondary">
            Copyright, SportSee 2023
          </span>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default NavBar;
