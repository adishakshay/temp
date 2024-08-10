import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const withAuth = (Component) => (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default withAuth;