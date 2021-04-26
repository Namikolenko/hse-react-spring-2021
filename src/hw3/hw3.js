import './hw3.css'
import data from './data/data.json'
import React from "react";
import logo from './public/logo192.png'

export const HeaderInfo = () => {
    return (
        <div className="header">
            <div className="headerInto">
                <div className="column">Mikolenko Nikolay</div>
                <div className="column"><img src={logo} className="reactImage" alt=""/></div>
                <div className="column">Homework 2-3</div>
            </div>
        </div>
    )
}

export class MyTodoList extends React.Component {
    state = {
        data: data
    }

    Task = ({id, name, description, completed}) => {

        return (
            <div className="content-item">
                <div><h2>Задача {id}</h2></div>
                <div className="content-inside">Название задачи "{name}"</div>
                <div className="content-inside">Описание задачи: {description}</div>
                <div className="content-inside button-div">
                    <button className="button-confirm" onClick={() => {
                        console.log("Task " + id + " completed status = " + completed)
                    }}>Нажми меня чтобы узнать выполнена ли задача
                    </button>
                </div>
            </div>
        )
    }

    List = () => {
        return (
            <div className="content-main">
                {this.state.data.map(it => <this.Task id={it.id} name={it.name} description={it.description}
                                                      completed={it.completed}/>)}
            </div>
        )
    }

    render() {
        return (
            <this.List/>
        )
    }
}