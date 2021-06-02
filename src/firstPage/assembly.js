import './firstPage.css'
import React from "react";
import logo from './public/logo192.png'
import {List} from './components/List'
import {ThemeContext} from "../ThemeContext";
import classnames from "classnames/bind";
import styles from "../styles.module.scss";

const cx = classnames.bind(styles)

export class HeaderInfo extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <div className={cx("header", `header-theme-${this.context}`)}>
                <div className="headerInto">
                    <div className="column">Mikolenko Nikolay</div>
                    <div className="column"><img src={logo} className="reactImage" alt=""/></div>
                    <div className="column">Homework 2-5</div>
                    <div className="column">
                        <input type="radio" value="light" checked={this.props.currentTheme === "light"}
                               onClick={this.props.switchTheme}/> Light theme
                        <input type="radio" value="dark" checked={this.props.currentTheme === "dark"}
                               onClick={this.props.switchTheme}/> Dark theme
                    </div>
                </div>
            </div>
        )
    }
}

export class MyTodoList extends React.Component {
    render() {
        return (
            <List/>
        )
    }
}