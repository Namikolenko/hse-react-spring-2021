import React from "react";
import {Task} from "./Task";
import {AddNewTaskForm} from "./AddNewTaskForm";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {handleAddNewTaskChange, handleStatusChange} from "../../actions/tasks";
import {connect} from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasksById,
    projects: state.tasks.projectsById,
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewTaskChange: (newTask) => dispatch(handleAddNewTaskChange(newTask)),
    dispatchStatusChange: (task) => dispatch(handleStatusChange(task))
})

export class List extends React.Component {

    state = {
        data: [],
    }
    name = ""
    tasksIds = []
    projectItem = undefined  // Если определен проект, запоминаем его чтобы передать в диспетчер

    constructor(props) {
        super(props);
        let tmpArrToDeploy = []
        if (this.props.match != undefined) {
            this.name = this.props.match.params.name

            if (Object.entries(this.props.projects).find(el => el[1].name == this.name) == undefined) {
                window.location.href = "/unknown"
            }

            Object.entries(this.props.projects).map(item => {
                if (item[1].name == this.name) {
                    this.tasksIds = item[1].tasksIds
                    if (this.tasksIds.length > 1) {
                        let someArr = []
                        Object.entries(this.props.tasks).map(it => {

                            if (this.tasksIds.find(itt => itt == parseInt(it[0])) != undefined) {
                                someArr.push(it)
                            }
                        })

                        someArr.map(it => tmpArrToDeploy.push(it[1]))
                        this.state.data = tmpArrToDeploy
                    }
                    this.projectItem = {...item}
                }
            })
        } else {
            Object.entries(this.props.tasks).map(it => tmpArrToDeploy.push(it[1]))
            this.state.data = tmpArrToDeploy
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            let tmpArrToDeploy = []
            if (this.props.match != undefined) {
                this.name = this.props.match.params.name

                if (Object.entries(this.props.projects).find(el => el[1].name == this.name) == undefined) {
                    window.location.href = "/unknown"
                }

                Object.entries(this.props.projects).map(item => {
                    if (item[1].name == this.name) {
                        this.tasksIds = item[1].tasksIds
                        if (this.tasksIds.length > 1) {
                            let someArr = []
                            Object.entries(this.props.tasks).map(it => {

                                if (this.tasksIds.find(itt => itt == parseInt(it[0])) != undefined) {
                                    someArr.push(it)
                                }
                            })

                            someArr.map(it => tmpArrToDeploy.push(it[1]))
                            this.setState({data: tmpArrToDeploy})
                        }
                        this.projectItem = {...item}
                    }
                })
            } else {
                Object.entries(this.props.tasks).map(it => tmpArrToDeploy.push(it[1]))
                this.setState({data: tmpArrToDeploy})
            }
        }
    }

    onClickAddEvent = ({name, description}) => {

        const obj = {
            id: Object.entries(this.props.tasks).length + 1,
            name: name,
            description: description,
            completed: false
        }

        let superObj = {}
        superObj[obj.id] = obj

        if (this.projectItem != undefined)
            this.projectItem['1'].tasksIds.push(obj.id)

        this.props.dispatchOnAddNewTaskChange({newTask: superObj, changeProject: this.projectItem})
    }

    onChangeCompleted = (completed, index, id) => {

        Object.entries(this.props.tasks).map(item => {
            if (item[1].id == id) {
                let itemCopy = {...item[1]}
                itemCopy.completed = !itemCopy.completed
                console.log("my", itemCopy)
                let updateTask = {}
                updateTask[itemCopy.id] = {...itemCopy}
                this.props.dispatchStatusChange(updateTask)
            }
        })
    }

    render() {
        return (
            <div className={cx("content-main", `content-main-theme-${this.props.theme}`)}>
                {this.state.data.map(it => <Task id={it.id}
                                                 name={it.name}
                                                 description={it.description}
                                                 completed={it.completed}
                                                 index={this.state.data.findIndex((el) => el.id === it.id)}
                                                 onChangeCompleted={this.onChangeCompleted}
                                                 context={this.context}
                />)}
                <AddNewTaskForm buttonClick={this.onClickAddEvent}/>
            </div>
        )
    }
}


export const NewList = connect(mapStateToProps, mapDispatchToProps)(List)