import React from "react";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {request} from "./Utils";
import {setCurrentTasks} from "../../actions/tasks";

const cx = classnames.bind(styles)

function BodyCtor(name, desc, comp, proj) {
    this.name = name
    this.description = desc
    this.priority = 2
    this.completed = !comp
    this.projectId = Number(proj)
}

export const NewTask = (props) => {
    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()

    return (
        <div className={cx("content-item", `content-item-theme-${theme}`)}>
            <div><h2>Задача {props.id}</h2></div>
            <div className="content-inside">Задача <h4>"{props.name}"</h4></div>
            <div className="content-inside">Описание задачи: {props.description}</div>
            <div className="content-inside button-div">
                <button type="button" className="button-confirm" onClick={() => {
                    request(`/projects/${props.project}/tasks/${props.id}/`, 'PUT', new BodyCtor(props.name, props.description, props.completed, props.project)).then(request(`/projects/${props.project}/tasks/`).then(res => {
                        dispatch(setCurrentTasks(res))
                    }))
                }}>{props.completed.toString()}
                </button>
            </div>
        </div>
    )
}