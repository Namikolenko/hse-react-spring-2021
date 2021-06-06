import {combineReducers} from "redux";
import {themeReducer} from "./theme";
import {tasksReducer} from "./tasks";

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks: tasksReducer
})