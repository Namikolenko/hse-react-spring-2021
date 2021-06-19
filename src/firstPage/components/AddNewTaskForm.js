import React from "react";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {connect} from "react-redux";

const INITIAL_BUTTONS = {
    name: "",
    description: ""
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const cx = classnames.bind(styles)

export class AddNewTaskFormComponent extends React.Component {

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
            <div className={cx("content-item", "content-main-form", `content-item-theme-${this.props.theme}`)}>
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

export const AddNewTaskForm = connect(mapStateToProps)(AddNewTaskFormComponent)