import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
