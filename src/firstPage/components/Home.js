import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {request} from "./Utils";
import {setCurrentProjects} from "../../actions/tasks";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";

const cx = classnames.bind(styles)

export const Page404 = () => {
    return (
        <div>
            <h2>Page 404. Ресурс не найден</h2>
            <a href="/home">Click me to get home</a>
        </div>
    )
}

function BodyCtor(nm, desc) {
    this.name = nm;
    this.description = desc;
}

const AddNewProjects = () => {
    const theme = useSelector((state) => state.theme.theme)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()

    return (
        <div className={cx("content-item", "content-main-form", `content-item-theme-${theme}`)}>
            <h2>Add new project</h2>
            <div>
                Project name:
                <input value={name} onChange={(e) => setName(e.currentTarget.value)}/>
            </div>
            <div>
                Project description:
                <input value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
            </div>
            <button type="button"
                    className="button-confirm"
                    onClick={() => {
                        request('/projects/', 'POST', new BodyCtor(name, description)).then(request('/projects/').then(res => dispatch(setCurrentProjects(res))))
                        setName("")
                        setDescription("")
                    }}>
                Confirm and Add
            </button>
        </div>
    )
}
//request('/projects/', 'POST', new BodyCtor(name, description)).then(request('/projects/').then(res => dispatch(setCurrentProjects(res))))
const projectsSelector = state => state.tasks.projectsById
export const NewHomeComponent = () => {
    const projects = useSelector(projectsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        request('/projects/').then(res => dispatch(setCurrentProjects(res)))
    }, [])

    return (
        <div>
            <h2> Set what project you would like to see</h2>
            {projects.map(it => <div><a href={it.id}>{it.name}</a></div>)}
            <AddNewProjects/>
        </div>
    )
}