import uiReducer, { initialUiState } from './reducers/ui/uiReducer';
import themeReducer, { initialThemeState } from './reducers/theme/themeReducer';
import serviceReducer, { initialServiceState } from './reducers/services/serviceReducer';
import { combineReducers } from 'redux';

export const initState = {
  uiReducer: initialUiState,
  themeReducer: initialThemeState,
  serviceReducer: initialServiceState,
};

export default combineReducers({
  uiReducer,
  themeReducer,
  serviceReducer
});