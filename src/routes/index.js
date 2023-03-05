import routesPaths from './routesPaths';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Ranking from 'pages/Ranking';
import About from 'pages/About';
import Settings from 'pages/Settings';
import Statistics from 'pages/Statistics';
import Suggestions from 'pages/Suggestions';
import Clients from 'pages/Clients';

const routes = [
  {
    path: routesPaths.index,
    element: <Home />,
    isPrivate: true,
  },
  {
    path: routesPaths.ranking,
    element: <Ranking />,
    isPrivate: true,
    title: 'Ranking',
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
    path: routesPaths.statistics,
    element: <Statistics />,
    isPrivate: true,
  },
  {
    path: routesPaths.clients,
    element: <Clients />,
    isPrivate: true,
    title: 'Clientes',
  },
  {
    path: routesPaths.usersStatistics,
    element: <Statistics />,
    isPrivate: true,
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
