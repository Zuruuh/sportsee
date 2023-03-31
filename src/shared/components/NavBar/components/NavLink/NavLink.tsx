import { type ReactNode, type FC } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import type { URI } from '~/shared/types/URI';
import URIValidator from '~/shared/validator/URIValidator';

interface NavLinkProps {
  to: URI;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <>
      <li>
        <Link className="text-center text-2xl text-text-secondary" to={to}>
          {children}
        </Link>
      </li>
    </>
  );
};

NavLink.propTypes = {
  to: URIValidator,
  children: PropTypes.node.isRequired,
};

export default NavLink;
