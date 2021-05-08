import React from "react";

export const Task = (props) => {
    return (
        <div className="content-item">
            <div><h2>Задача {props.id}</h2></div>
            <div className="content-inside">Задача <h4>"{props.name}"</h4></div>
            <div className="content-inside">Описание задачи: {props.description}</div>
            <div className="content-inside button-div">
                <button type="button" className="button-confirm" onClick={() => {
                    props.onChangeCompleted(props.completed, props.index)
                }}>{props.completed.toString()}
                </button>
            </div>
        </div>
    )
}