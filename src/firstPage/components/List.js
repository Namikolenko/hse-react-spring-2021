import React from "react";
import {Task} from "./Task";
import {AddNewTaskForm} from "./AddNewTaskForm";
import data from '../data/data.json'
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {ThemeContext} from "../../ThemeContext";

const cx = classnames.bind(styles)

export class List extends React.Component {

    static contextType = ThemeContext

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
    }

    onClickBackend = () => {
        fetch("http://namikolenko.ru/api/getAllTasks").then(r => r.json())
            .then(d => this.setState({data: [...this.state.data, ...d]}))
        console.log("should be done")
    }

    onChangeCompleted = (completed, index) => {

        this.setState(currentState => {
            let newData = {...currentState.data, [index] : {...currentState.data[index]}}
            newData[index].completed = !completed
            return {
                data : Object.values(newData)
            }
        })
    }

    render() {
        return (
            <div className={cx("content-main", `content-main-theme-${this.context}`)}>
                {this.state.data.map(it => <Task id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}
                                                 index={this.state.data.findIndex((el) => el.id === it.id)}
                                                 onChangeCompleted={this.onChangeCompleted}
                                                 context={this.context}
                />)}
                <AddNewTaskForm buttonClick={this.onClickAddEvent}/>
                <button onClick={this.onClickBackend}>Type me to get extra tasks!</button>
            </div>
        )
    }
}

export default List