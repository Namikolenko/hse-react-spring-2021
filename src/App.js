//import logo from './logo.svg';
import './App.css';
import "./firstPage/assembly";
import React from "react";
import {HeaderInfo, MyTodoList} from "./firstPage/assembly";
import {DEFAULT_THEME, ThemeContext} from "./ThemeContext";

class Combiner extends React.Component {

    state = {
        theme: DEFAULT_THEME
    }

    changeTheme = (event) => {
        this.setState({theme: event.target.value})
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <HeaderInfo switchTheme={this.changeTheme} currentTheme={this.state.theme}/>
                    <MyTodoList/>
                </ThemeContext.Provider>
            </div>
        )
    }
}

function App() {
    return <Combiner/>
}

export default App;
