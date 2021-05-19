import React from "react";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {ThemeContext} from "../../ThemeContext";

const INITIAL_BUTTONS = {
    name: "",
    description: ""
}

const cx = classnames.bind(styles)

export class AddNewTaskForm extends React.Component {

    static contextType = ThemeContext

    state = INITIAL_BUTTONS

    onChange = (event) => {
        const {value, name} = event.currentTarget
        const newState = {...this.state, [name]: value}
        this.setState(newState)
    }

    confirmAddClick = () => {
        this.props.buttonClick(this.state)
        this.setState(INITIAL_BUTTONS)
    }

    render() {
        return (
            <div className={cx("content-item", "content-main-form", `content-item-theme-${this.context}`)}>
                <h2>Add new task</h2>
                <div>
                    Task name:
                    <input value={this.state.name} name="name" onChange={this.onChange}/>
                </div>
                <div>
                    Task description:
                    <input value={this.state.description} name="description" onChange={this.onChange}/>
                </div>
                <button type="button"
                        className="button-confirm"
                        onClick={this.confirmAddClick}>
                    Confirm and Add
                </button>
            </div>
        )
    }
}

export default AddNewTaskForm