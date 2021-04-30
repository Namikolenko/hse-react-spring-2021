import React from "react";

export class Task extends React.Component {
    render() {
        return (
            <div className="content-item">
                <div><h2>Задача {this.props.id}</h2></div>
                <div className="content-inside">Задача <h4>"{this.props.name}"</h4></div>
                <div className="content-inside">Описание задачи: {this.props.description}</div>
                <div className="content-inside button-div">
                    <button type="button" className="button-confirm" onClick={() => {
                        this.props.onChangeCompleted(this.props.completed, this.props.index)
                    }}>{{...this.props}.completed.toString()}
                    </button>
                </div>
            </div>
        )
    }
}

export default Task