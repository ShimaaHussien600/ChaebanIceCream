import uiReducer, { initialUiState } from './reducers/ui/uiReducer';
import themeReducer, { initialThemeState } from './reducers/theme/themeReducer';

import { combineReducers } from 'redux';

export const initState = {
  uiReducer: initialUiState,
  themeReducer: initialThemeState,
};

export default combineReducers({
  uiReducer,
  themeReducer
});