import React from "react";

export class AddNewTaskForm extends React.Component {
    render() {
        return (
            <div className="content-item content-main-form">
                <h2>Add new task</h2>
                <div>
                    Task name:
                    <input value={this.props.nameInput} onChange={(e) => this.props.updateTextName(e.target.value)} name="name"/>
                </div>
                <div>
                    Task description:
                    <input value={this.props.nameDesc} onChange={(e) => this.props.updateTextDesc(e.target.value)} name="description"/>
                </div>
                <button type="button" className="button-confirm" onClick={this.props.buttonClick}>Confirm and Add</button>
            </div>
        )
    }
}

export default AddNewTaskForm