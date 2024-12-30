import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';


import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import App from './App';

import '../src/styles/index.css';


const Router = () => {
  const isUserConnected = useSelector((state) => state.user.isConnected);

 
  function canLoad(isUserConnected) {
    return () => {
      if (isUserConnected) {
        return true;
      } else {
        return redirect('/login');
      }
    };
  }

  const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {
      path: '/profile',
      loader: canLoad(isUserConnected),
      element: <Profile />
    },
    // { path: '/swagger', element: <Swagger /> }
  ]);
  return (
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  );
};

export default Router;
