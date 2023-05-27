import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlise';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const appReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   contacts: contactsReducer,
//   filter: contactsReducer,
// });

// const rootReducer = (state, action) => {
//   if (action.type === 'auth/logout/fulfilled') {
//     return appReducer(undefined, action);
//   }
//   return appReducer(state, action);
// };

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// });
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
