import * as Actions from './serviceActions';

export const initialServiceState = {
    selectedDate: new Date(),
    messageValue: ""
};


export default (state = initialServiceState, action) => {
    switch (action.type) {
        case Actions.SET_DATE:
            return {
                ...state, selectedDate: action.payload
            };
        case Actions.SET_MESSAGE:
            return {
                ...state, messageValue: action.payload
            };
        default:
            return state;
    }
};