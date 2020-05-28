import React from 'react';
import './TodoList.css';

class   TodoListTask extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    onIsDoneChanged = (event) => {
        this.props.changeStatus(this.props.task.id, event.currentTarget.checked)
    }

    onTitleChanged = (event) => {
        this.props.changeTitle(this.props.task.id, event.currentTarget.value)
    }

    onRemoveTask = () => {
        this.props.removeTask(this.props.task.id)
    }

    onChangePriority = (event) => {
        this.props.changePriority(this.props.task.id, event.currentTarget.value)
    }

    render = () => {

        let classTaskIsDone = this.props.task.isDone
            ? `${"todoList-task"} ${'done'}`
            : "todoList-task"

        return (
            <div className={classTaskIsDone}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input autoFocus={true}
                             onChange={this.onTitleChanged}
                             onBlur={this.deactivateEditMode}
                             value={this.props.task.title}/>
                    : <span onClick={this.activateEditMode}>
                {this.props.task.id}-{this.props.task.title}</span>
                }, priority:
                <select value={this.props.task.priority}
                        onChange={this.onChangePriority}>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <button className={'btn'}
                        onClick={this.onRemoveTask}>
                    X
                </button>
            </div>
        )
    }
}

export default TodoListTask

