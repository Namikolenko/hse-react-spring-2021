import React, {useState} from "react";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {request} from "./Utils";
import {setCurrentTasks} from "../../actions/tasks";

const cx = classnames.bind(styles)

function BodyCtor(nm, desc) {
    this.name = nm;
    this.description = desc;
}

export const AddTask = (props) => {
    const theme = useSelector((state) => state.theme.theme)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()

    return (
        <div className={cx("content-item", "content-main-form", `content-item-theme-${theme}`)}>
            <h2>Add new task</h2>
            <div>
                Task name:
                <input value={name} name="name" onChange={(e) => setName(e.currentTarget.value)}/>
            </div>
            <div>
                Task description:
                <input value={description} name="description" onChange={(e) => setDescription(e.currentTarget.value)}/>
            </div>
            <button type="button"
                    className="button-confirm"
                    onClick={() => {
                        if (name && description){
                            console.log(1)
                            request(`/projects/${props.name}/tasks/`, 'POST', new BodyCtor(name, description)).then(request(`/projects/${props.name}/tasks/`).then(res => dispatch(setCurrentTasks(res))))
                            setName("")
                            setDescription("")
                        }
                    }}>
                Confirm and Add
            </button>
        </div>
    )
}