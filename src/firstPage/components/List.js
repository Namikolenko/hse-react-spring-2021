import React from "react";
import {Task} from "./Task";
import {AddNewTaskForm} from "./AddNewTaskForm";
import data from '../data/data.json'

export class List extends React.Component {

    lastId = 6

    state = {
        data: data,
    }

    onClickAddEvent = ({name, description}) => {
        const obj = {
            id: this.state.data.length,
            name: name,
            description: description,
            completed: false
        }
        this.setState({data: [...this.state.data, obj]})
        this.lastId += 1
    }

    render() {
        return (
            <div className="content-main">
                {this.state.data.map(it => <Task id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}/>)}
                <AddNewTaskForm buttonClick={this.onClickAddEvent}/>
            </div>
        )
    }
}

export default List