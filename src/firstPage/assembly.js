import './firstPage.css'
import React from "react";
import {List, NewList} from './components/List'

export class MyTodoList extends React.Component {
    render() {
        return (
            <NewList/>
        )
    }
}