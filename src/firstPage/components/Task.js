import React from "react";

export class Task extends React.Component {
    state = {
        id: 0,
        name: "",
        description: "",
        completed: false
    }

    constructor({id, name, description, completed}) {
        super({id, name, description, completed});
        this.state = {
            id: id,
            name: name,
            description: description,
            completed: completed
        }
    }

    render() {
        return (
            <div className="content-item">
                <div><h2>Задача {this.state.id}</h2></div>
                <div className="content-inside">Задача <h4>"{this.state.name}"</h4></div>
                <div className="content-inside">Описание задачи: {this.state.description}</div>
                <div className="content-inside button-div">
                    <button type="button" className="button-confirm" onClick={() => {
                        const oldStatus = this.state.completed.toString()
                        this.state.completed ? this.setState({completed: false}) : this.setState({completed: true})
                        const newStatus = this.state.completed.toString()

                        console.log("Task " + this.state.id + " changed status from " + oldStatus + " to " + newStatus)
                    }}>{this.state.completed.toString()}
                    </button>
                </div>
            </div>
        )
    }
}

export default Task