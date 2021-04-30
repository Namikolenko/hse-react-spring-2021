import React from "react";

export class Task extends React.Component {

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
                        this.state.completed ? this.setState({completed: false}) : this.setState({completed: true})

                        this.props.onChangeCompleted(this.state.completed, this.props.index)
                    }}>{{...this.state}.completed.toString()}
                    </button>
                </div>
            </div>
        )
    }
}

export default Task