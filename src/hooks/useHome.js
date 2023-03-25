import { useNavigate } from 'react-router-dom';

import routesPaths from 'routes/routesPaths';

const useHome = () => {
  const navigate = useNavigate();

  const goToAddProduct = () => {
    navigate(routesPaths.addProduct);
  };

  return {
    products: [
      {
        id: '2301',
        name: 'Brujita',
        photo: 'https://source.unsplash.com/random/?amigurumi',
        supplies: [],
        hoursWork: 'Alto',
        totalCost: 850,
        sellCost: 1000,
        patternLink: 'https://www.youtube.com/watch?v=bw3W9QOsZdI',
        packaging: [],
      },
    ],
    goToAddProduct,
  };
};

export default useHome;
