import { Outlet } from 'react-router-dom';
import AppFooter from '../components/AppFooter';
import { listContext } from '../helpers/AppContexts';
import { IMovie } from '../helpers/httpsService';
import NavBar from './NavBar';
import '../styles/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const favoriteList: IMovie[] = [];

function Layout() {
  return (
    <listContext.Provider value={{ favoriteList }}>
      <div className="app">
        <NavBar />
        <Outlet />
        <AppFooter />
      </div>
    </listContext.Provider>
  );
}

export default Layout;
