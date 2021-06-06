import React from "react";
import {Task} from "./Task";
import {AddNewTaskForm} from "./AddNewTaskForm";
import classnames from "classnames/bind";
import styles from "../../styles.module.scss";
import {ThemeContext} from "../../ThemeContext";
import {handleAddNewTaskChange} from "../../actions/tasks";
import {connect} from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasksById,
    projects: state.tasks.projectsById,
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewTaskChange: (newTasks) => dispatch(handleAddNewTaskChange(newTasks))
})

export class List extends React.Component {

    static contextType = ThemeContext

    state = {
        data: [],
    }
    name = ""
    tasksIds = []

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
                }
            })
        }
        else {
            Object.entries(this.props.tasks).map(it => tmpArrToDeploy.push(it[1]))
            this.state.data = tmpArrToDeploy
        }
    }

    onClickAddEvent = ({name, description}) => {

        const obj = {
            id: Object.entries(this.props.tasks).length + 1,
            name: name,
            description: description,
            completed: false
        }
        this.setState({data: [...this.state.data, obj]})
    }

    onChangeCompleted = (completed, index) => {

        this.setState(currentState => {
            let newData = {...currentState.data, [index]: {...currentState.data[index]}}
            newData[index].completed = !completed
            return {
                data: Object.values(newData)
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

export default List
export const NewList = connect(mapStateToProps, mapDispatchToProps)(List)