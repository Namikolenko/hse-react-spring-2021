//import logo from './logo.svg';
import './App.css';
import "./firstPage/assembly";
import React from "react";
import {HeaderInfo, MyTodoList} from "./firstPage/assembly";

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
