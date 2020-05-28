import React from 'react';
import './TodoList.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {

        let tasksElements = this.props.tasks
            .map(task => <TodoListTask
                onShowTaskCreated={this.props.onShowTaskCreated}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
                changePriority={this.props.changePriority}
                removeTask={this.props.removeTask}
                task={task}
            />)

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        )
    }
}

export default TodoListTasks

