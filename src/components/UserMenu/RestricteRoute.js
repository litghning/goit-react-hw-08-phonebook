import { useAuthHook } from 'hook/useAuth'; 
import { Navigate } from 'react-router-dom';

const RestricteRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthHook();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestricteRoute;