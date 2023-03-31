import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '~/shared/components/NavBar';

const Layout: FC = () => {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};

export default Layout;
