//import logo from './logo.svg';
import './App.css';
import "./hw3/hw3";
import React from "react";
import {HeaderInfo, MyTodoList} from "./hw3/hw3";

class Combiner extends React.Component {
    render() {
        return (
            <div>
                <HeaderInfo/>
                <MyTodoList/>
            </div>
        )
    }
}

function App() {
    return <Combiner/>
}

export default App;
