import React from "react";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {connect} from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const TaskComponent = (props) => {
    return (
        <div className={cx("content-item", `content-item-theme-${props.theme}`)}>
            <div><h2>Задача {props.id}</h2></div>
            <div className="content-inside">Задача <h4>"{props.name}"</h4></div>
            <div className="content-inside">Описание задачи: {props.description}</div>
            <div className="content-inside button-div">
                <button type="button" className="button-confirm" onClick={() => {
                    props.onChangeCompleted(props.completed, props.index, props.id)
                }}>{props.completed.toString()}
                </button>
            </div>
        </div>
    )
}

export const Task = connect(mapStateToProps)(TaskComponent)