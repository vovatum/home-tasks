import React from 'react';
import './TodoList.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {removeLocalStorage, restoreState, saveState} from "../../LocStorFunctions";

class TodoList extends React.Component {

    nextTaskId = 0

    state = {
        tasks: [],
        filterValue: "All",
    }

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: '',
            created: new Date(),
            updated: 'not updated',
            finished: 'not finished'
        }
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        }, () => {
            saveState(this.state)
        })
    }
    removeTask = (taskId) => {
        this.nextTaskId = 0
        // eslint-disable-next-line array-callback-return
        let newTasks = this.state.tasks.filter(task => {
            if (task.id !== taskId) {
                task.id = this.nextTaskId
                this.nextTaskId++
                return task
            }
        })
        this.setState({
            tasks: newTasks
        }, () => {
            saveState(this.state)
        })
    }
    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(task => {
            if (task.id !== taskId) {
                return task
            } else {
                return {...task, ...obj}
            }
        })
        this.setState({
            tasks: newTasks
        }, () => {
            saveState(this.state)
        })
    }
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {
            priority: priority,
            updated: new Date()
        })
    }
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {
            isDone: isDone,
            finished: new Date()
        })
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {
            title: title,
            updated: new Date()
        })

    }
    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            saveState(this.state)
        })
    }
    onRemoveLocalStorage = () => {
        removeLocalStorage()
        this.componentDidMount()
    }
    componentDidMount() {
        let state = {
            tasks: [],
            filterValue: "All"
        }
        this.setState(restoreState(state), () => {
            let maxValueArr = Math.max.apply(null,
                this.state.tasks.map(task => task.id))
            if (maxValueArr === -Infinity) {
                this.nextTaskId = 0
            } else {
                this.nextTaskId = ++maxValueArr
            }
        })
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader
                        onRemoveLocalStorage={this.onRemoveLocalStorage}
                        addTask={this.addTask}
                    />
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        changePriority={this.changePriority}
                        changeTitle={this.changeTitle}
                        removeTask={this.removeTask}
                        tasks={this.state.tasks.filter(task => {
                            return this.state.filterValue === 'All'
                                || (this.state.filterValue === 'Completed'
                                    && task.isDone === true)
                                || (this.state.filterValue === 'Active'
                                    && task.isDone === false)
                        })}/>
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        )
    }
}


export default TodoList

