import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';

import { HOME_ID, CLIENTS_ID, ABOUT_ID, SETTINGS_ID } from 'constants/componentsIds';
import routesPaths from 'routes/routesPaths';

export const navData = [
  {
    id: HOME_ID,
    icon: <HomeIcon />,
    text: 'Stock',
    link: routesPaths.index,
    end: true,
  },
  {
    id: CLIENTS_ID,
    icon: <GroupIcon />,
    text: 'Clientes',
    link: routesPaths.clients,
    end: true,
  },
  {
    id: ABOUT_ID,
    icon: <InfoIcon />,
    text: 'Nosotros',
    link: routesPaths.about,
    end: true,
  },
  {
    id: SETTINGS_ID,
    icon: <SettingsIcon />,
    text: 'Settings',
    link: routesPaths.settings,
    end: true,
  },
];
