import React from "react";
import {Task} from "./Task";
import {AddNewTaskForm} from "./AddNewTaskForm";
import data from '../data/data.json'

const INITIAL_BUTTONS = {
    name: "",
    description: ""
}

export class List extends React.Component {

    lastId = 6

    state = {
        data: data,
        buttons: INITIAL_BUTTONS
    }

    addNameObj = (obj) => {
        const newState = {
            name: obj,
            description: this.state.buttons.description
        }
        this.setState({buttons: newState})
    }

    addDescObj = (obj) => {
        const newState = {
            name: this.state.buttons.name,
            description: obj
        }
        this.setState({buttons: newState})
    }

    onClickAddEvent = () => {
        const obj = {
            id: this.lastId,
            name: this.state.buttons.name,
            description: this.state.buttons.description,
            completed: false
        }
        this.setState({data: [...this.state.data, obj]})
        this.lastId += 1
        this.setState({buttons: INITIAL_BUTTONS})
        console.log(this.state)
    }

    render() {
        return (
            <div className="content-main">
                {this.state.data.map(it => <Task id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}/>)}
                <AddNewTaskForm updateTextName={this.addNameObj}
                                nameInput={this.state.buttons.name}
                                updateTextDesc={this.addDescObj}
                                nameDesc={this.state.buttons.description}
                                buttonClick={this.onClickAddEvent}/>
            </div>
        )
    }
}

export default List