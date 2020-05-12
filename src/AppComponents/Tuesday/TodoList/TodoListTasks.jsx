import React from 'react';
import './TodoList.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {

        let tasksElements = this.props.tasks
            .map(task => <TodoListTask changeStatus={this.props.changeStatus}
                                       changeTitle={this.props.changeTitle}
                                       task={task}/>);

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        )
    }
}

export default TodoListTasks

