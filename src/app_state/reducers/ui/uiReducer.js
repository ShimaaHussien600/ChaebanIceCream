import * as Actions from './uiActions';

export const initialUiState = {
    pageLoading: true,
    coverLoading: false,
};

export default (state = initialUiState, action) => {
    switch (action.type) {
        case Actions.PAGE_LOADING_ON:
            return {
                ...state,
                pageLoading: true,
            };
        case Actions.PAGE_LOADING_OFF:
            return {
                ...state,
                pageLoading: false,
            };

        default:
            return state;
    }
};