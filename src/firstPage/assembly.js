import './firstPage.css'
import React from "react";
import logo from './public/logo192.png'
import {List} from './components/List'

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
    render() {
        return (
            <List/>
        )
    }
}