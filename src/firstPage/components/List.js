import React, {useEffect} from "react";
import {NewTask} from "./Task";
import {AddTask} from "./AddNewTaskForm";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {setCurrentTasks} from "../../actions/tasks";
import {useDispatch, useSelector} from "react-redux";
import {request} from "./Utils";

const cx = classnames.bind(styles)

const tasksSelector = state => state.tasks.tasksById
export const NewList = (props) => {
    const tasks = useSelector(tasksSelector)
    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        request(`/projects/${props.match.params.name}/tasks/`).then(res => {
            dispatch(setCurrentTasks(res))
        })
    }, [tasks])

    return (
        <div className={cx("content-main", `content-main-theme-${theme}`)}>
            {tasks.map(it => <NewTask id={it.id}
                                      name={it.name}
                                      description={it.description}
                                      completed={it.completed}
                                      project={props.match.params.name}
            />)}
            <AddTask name={props.match.params.name}/>
        </div>
    )
}