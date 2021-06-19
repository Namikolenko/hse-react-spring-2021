export const STATUS_CHANGE = 'STATUS_CHANGE'
export const ADD_NEW_TASK = 'ADD_NEW_TASK'

export const handleStatusChange = (status) => ({
    type: STATUS_CHANGE,
    payload: status
})

export const handleAddNewTaskChange = (task) => ({
    type: ADD_NEW_TASK,
    payload: task
})