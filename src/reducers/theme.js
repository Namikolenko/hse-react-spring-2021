import {CHANGE_THEME} from "../actions/theme";

const initialState = {
    theme: 'dark'
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.payload,
            };
        }
        default:
            return state;
    }
};