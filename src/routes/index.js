import routesPaths from './routesPaths';
import Home from 'pages/Home';
import Login from 'pages/Login';
import About from 'pages/About';
import Settings from 'pages/Settings';
import Suggestions from 'pages/Suggestions';
import Clients from 'pages/Clients';

const routes = [
  {
    path: routesPaths.index,
    element: <Home />,
    isPrivate: true,
  },
  {
    path: routesPaths.about,
    element: <About />,
    isPrivate: true,
    title: 'Nosotros',
  },
  {
    path: routesPaths.settings,
    element: <Settings />,
    isPrivate: true,
    title: 'Settings (more coming soon 👀)',
  },
  {
    path: routesPaths.clients,
    element: <Clients />,
    isPrivate: true,
    title: 'Clientes',
  },
  {
    path: routesPaths.suggestions,
    element: <Suggestions />,
    isPrivate: true,
    title: 'Suggestions',
  },
  {
    path: routesPaths.login,
    element: <Login />,
  },
];

export default routes;
