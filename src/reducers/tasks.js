import {SET_PROJECTS, SET_TASKS} from "../actions/tasks";

const initialState = {
    projectsById: [],
    tasksById: []
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return {
                ...state,
                projectsById: action.payload
            }
        }
        case SET_TASKS: {
            return {
                ...state,
                tasksById: action.payload
            }
        }
        default:
            return state
    }
}