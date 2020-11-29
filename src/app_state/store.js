import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const store = createStore(
    persistedReducer
  );
  const persistor = persistStore(store);
  return { store, persistor };
};


export default configureStore();