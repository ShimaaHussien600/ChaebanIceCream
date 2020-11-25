import * as Actions from './themeActions';
import { darkTheme } from '../../../assets/themes';


export const initialThemeState = {
    theme: darkTheme
};


export default (state = initialThemeState, action) => {
    switch (action.type) {
        case Actions.APPLY_THEME:
            return Object.assign({}, { theme: action.payload });
        default:
            return state;
    }
};