import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import statisticsReducer from './statisticsReducer';
import userReducer from './userReducer';

const sessionPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['authenticated', 'user'],
};

const rootReducer = combineReducers({
  statistics: statisticsReducer,
  user: persistReducer(sessionPersistConfig, userReducer),
});

export default rootReducer;
