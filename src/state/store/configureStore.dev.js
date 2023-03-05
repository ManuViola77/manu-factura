import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import reducer from 'state/reducers/reducer';

const store = () => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default store;
