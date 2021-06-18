export const SET_PROJECTS = "SET_PROJECTS"
export const SET_TASKS = "SET_TASKS"

export const setCurrentProjects = (projects) => ({
    type: SET_PROJECTS,
    payload: projects
})

export const setCurrentTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
})