import { Outlet } from 'react-router-dom';

/**
 * Represents the layout that contains the header and the navigation menu
 * Outlet represents the child item based on the road you are on
 */
const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
