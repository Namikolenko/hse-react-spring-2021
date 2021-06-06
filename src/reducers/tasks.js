import {ADD_NEW_TASK, STATUS_CHANGE} from "../actions/tasks";

import projects from "../firstPage/data/projects.json"
import tasks from "../firstPage/data/tasks.json"

const initialState = {
    projectsById: projects,
    tasksById: tasks
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGE: {
            return {
                ...state,
                tasksById: action.payload
            }
        }
        case ADD_NEW_TASK: {
            return {
                ...state,
                tasksById: action.payload
            }
        }
        default:
            return state
    }
}