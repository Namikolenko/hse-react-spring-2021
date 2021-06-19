import './App.css';
import "./firstPage/assembly";
import React from "react";
import {MyTodoList} from "./firstPage/assembly";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {HomeComponent, Page404} from "./firstPage/components/Home";
import {NewList} from "./firstPage/components/List";

import {Provider} from 'react-redux'
import {createStore} from "redux";
import {rootReducer} from "./reducers";
import {Header} from "./firstPage/components/Header";

const store = createStore(rootReducer)

class Combiner extends React.Component {

    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/">
                                <Header/>
                                <Switch>
                                    <Route exact path="/home" component={HomeComponent}/>
                                    <Route exact path="/allTasks" component={MyTodoList}/>
                                    <Route exact path="/unknown" component={Page404}/>
                                    <Route exact path="/:name" component={NewList}/>
                                </Switch>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

function App() {
    return <Combiner/>
}

export default App;
