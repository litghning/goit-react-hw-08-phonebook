import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refCurrentUser } from 'redux/auth/operations';
import { lazy } from 'react';
import RestricteRoute from './UserMenu/RestricteRoute';
import { useAuthHook } from 'hook/useAuth';
import PrivateRoute from './UserMenu/PrivateRoute';
import { Layout } from './Layout/Layout'; 

const HomeView = lazy(() => import('../pages/home'));
const RegistrationView = lazy(() => import('../pages/registration'));
const Authorization = lazy(() => import('../pages/authorization'));
const ContactsView = lazy(() => import('../pages/contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthHook();

  useEffect(() => {
    dispatch(refCurrentUser());
  }, [dispatch]);
    return (
      !isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/register"
              element={
                <RestricteRoute component={RegistrationView} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <RestricteRoute component={Authorization} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsView} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )
    );
  };
  export default App;