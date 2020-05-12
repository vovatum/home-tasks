import React from 'react';
import './TodoList.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {removeLocalStorage, restoreState, saveState} from "./LocStorFunctions";

class TodoList extends React.Component {

    nextTaskId = 0

    state = {
        tasks: [],
        filterValue: "All"
    }

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: 'high'
        }
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        }, () => {
            saveState(this.state)
        })
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})

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

    onRemoveLocalStorage = () => {
        removeLocalStorage()
        this.componentDidMount()
    }

    componentDidMount() {
        this.setState(restoreState(), () => {
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
                    <TodoListHeader onRemoveLocalStorage={this.onRemoveLocalStorage}
                                    addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   tasks={this.state.tasks.filter(task => {
                                       return this.state.filterValue === 'All'
                                           || this.state.filterValue === 'Completed'
                                           && task.isDone === true
                                           || this.state.filterValue === 'Active'
                                           && task.isDone === false
                                   })}/>
                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}/>
                </div>
            </div>
        )
    }
}

export default TodoList

