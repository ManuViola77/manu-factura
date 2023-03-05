import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer';

const sessionPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['authenticated', 'user'],
};

const rootReducer = combineReducers({
  user: persistReducer(sessionPersistConfig, userReducer),
});

export default rootReducer;
