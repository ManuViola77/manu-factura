import routesPaths from './routesPaths';

import About from 'pages/About';
import AddProduct from 'pages/AddProduct';
import Clients from 'pages/Clients';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Settings from 'pages/Settings';

const routes = [
  {
    path: routesPaths.index,
    element: <Home />,
    isPrivate: true,
    showSideNav: true,
  },
  {
    path: routesPaths.about,
    element: <About />,
    isPrivate: true,
    showSideNav: true,
    title: 'Nosotros',
  },
  {
    path: routesPaths.addProduct,
    element: <AddProduct />,
    isPrivate: true,
    title: 'Agregar Producto',
  },
  {
    path: routesPaths.clients,
    element: <Clients />,
    isPrivate: true,
    showSideNav: true,
    title: 'Clientes',
  },
  {
    path: routesPaths.login,
    element: <Login />,
  },
  {
    path: routesPaths.settings,
    element: <Settings />,
    isPrivate: true,
    showSideNav: true,
    title: 'Settings (more coming soon 👀)',
  },
];

export default routes;
