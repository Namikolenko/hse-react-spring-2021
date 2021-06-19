import React from "react";
import projects from "../data/projects.json"

export class Page404 extends React.Component {
    render() {
        return (
            <div>
                <h2>Page 404. Ресурс не найден</h2>
                <a href="/home">Click me to get home</a>
            </div>
        );
    }
}

export class HomeComponent extends React.Component {

    render() {
        return (
            <div>
                <h2> Set what project you would like to see</h2>

                {Object.entries(projects).map(item => <div><a href={item[1].name}>{item[1].name}</a></div>)}


                <a href="/allTasks">Or you can see all tasks you have</a>
            </div>
        )
    }
}