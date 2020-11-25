import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = () => {
  const store = createStore(
    rootReducer
  );
  return { store };
};


export default configureStore();
