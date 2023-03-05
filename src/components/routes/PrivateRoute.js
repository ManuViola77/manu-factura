import { bool, node } from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

import routesPaths from '../../routes/routesPaths';

const PrivateRoute = ({ children, isPrivate, authenticated /* isAdminUser */ }) => {
  const location = useLocation();

  if (!isPrivate) {
    return children;
  }

  if (!authenticated) {
    return <Navigate to={routesPaths.login} state={{ from: location }} />;
  }

  /*  if (!isAdminUser) {
    return <Navigate to={routesPaths.index} state={{ from: location }} />;
  }
 */
  return children;
};

PrivateRoute.propTypes = {
  children: node.isRequired,
  isPrivate: bool,
  authenticated: bool,
  // isAdminUser: bool,
};

export default PrivateRoute;
