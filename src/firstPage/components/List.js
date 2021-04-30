import React from "react";
import {Task} from "./Task";
import {AddNewTaskForm} from "./AddNewTaskForm";
import data from '../data/data.json'

export class List extends React.Component {

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

    onClickBackend = () => {
        fetch("http://namikolenko.ru/api/getAllTasks").then(r => r.json())
            .then(d => this.setState({data: [...this.state.data, ...d]}))
        console.log("should be done")
    }

    onChangeCompleted = (completed, index) => {
        let currentState = [...this.state.data]
        currentState[index].completed = !completed
        this.setState({currentState})
    }

    render() {
        return (
            <div className="content-main">
                {this.state.data.map(it => <Task id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}
                                                 index={this.state.data.findIndex((el) => el.id === it.id)}
                                                 onChangeCompleted={this.onChangeCompleted}
                />)}
                <AddNewTaskForm buttonClick={this.onClickAddEvent}/>
                <button onClick={this.onClickBackend}>Type me to get extra tasks!</button>
            </div>
        )
    }
}

export default List