//import logo from './logo.svg';
import './App.css';
import "./firstPage/assembly";
import React from "react";
import {HeaderInfo, MyTodoList} from "./firstPage/assembly";
import {DEFAULT_THEME, ThemeContext} from "./ThemeContext";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {HomeComponent, Page404} from "./firstPage/components/Home";
import List from "./firstPage/components/List";

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
                    <BrowserRouter>
                        <Switch>
                            <Route path="/">
                                <HeaderInfo switchTheme={this.changeTheme} currentTheme={this.state.theme}/>
                                <Switch>
                                    <Route exact path="/home" component={HomeComponent}/>
                                    <Route exact path="/allTasks" component={MyTodoList}/>
                                    <Route exact path="/unknown" component={Page404}/>
                                    <Route exact path="/:name" component={List}/>
                                </Switch>

                            </Route>


                        </Switch>
                    </BrowserRouter>


                </ThemeContext.Provider>
            </div>
        )
    }
}

function App() {
    return <Combiner/>
}

export default App;
