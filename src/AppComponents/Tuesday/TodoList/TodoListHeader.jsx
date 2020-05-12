import React from 'react';
import './TodoList.css';

class TodoListHeader extends React.Component {

    state = {
        error: true,
        title: ''
    }

    onAddTaskClick = () => {
        let newText = this.state.title
        this.state.title = '' //null не сработал как раньше
        if (newText === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText)
        }
    }

    onTypeInput = (event) => {
        this.setState({error: event.currentTarget.checked})
        this.setState({title: event.currentTarget.value})
    }

    onEnterPress = (event) => {
        if (event.key === 'Enter')
            this.onAddTaskClick()
    }

    onRemoveLocalStorage = () => {
        this.props.removeLocalStorage()
        this.state.title = ''
    }

    render = () => {

        let classForError = this.state.error
            ? "error"
            : ""

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={classForError}
                           type="text"
                           placeholder="New task name"
                           onChange={this.onTypeInput}
                           onKeyPress={this.onEnterPress}
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick}>Add
                    </button>
                    <button onClick={this.onRemoveLocalStorage}> remove localStorage
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

