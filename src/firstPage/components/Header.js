import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {handleThemeChange} from "../../actions/theme";
import logo from "../public/logo192.png";
import {connect} from "react-redux";
import React from "react";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const HeaderComponent = ({
                             theme,
                             dispatchOnThemeChange
                         }) => {
    const onThemeChange = (e) => {
        dispatchOnThemeChange(e.target.value)
    }

    return (
        <div className={cx("header", `header-theme-${theme}`)}>
            <div className="headerInto">
                <div className="column">Mikolenko Nikolay</div>
                <div className="column"><img src={logo} className="reactImage" alt=""/></div>
                <div className="column">Homework 2-7</div>
                <div className="column">
                    <input type="radio" value="light" checked={theme === "light"}
                           onClick={onThemeChange}/> Light theme
                    <input type="radio" value="dark" checked={theme === "dark"}
                           onClick={onThemeChange}/> Dark theme
                </div>
                <div className="column">
                    <a href="/home">Get me home!</a>
                </div>
            </div>
        </div>
    )
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)