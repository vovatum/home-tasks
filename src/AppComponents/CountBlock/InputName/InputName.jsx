import React from 'react';
import styles from './InputName.module.css'

class InputName extends React.Component {

    state = {
        error: false,
        title: ''
    }

    onTypeInput = (event) => {
        this.setState({
            title: event.currentTarget.value,
            error: false
        })
    }

    onEnterPress = (event) => {
        if (event.key === 'Enter')
            this.props.onAddNameClick()
        this.setState({title: event.currentTarget.value})
        let inputName = this.state.title
        if (inputName === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
        }
    }

    render = () => {

        let classForError = this.state.error
            ? `${styles.inputName} ${styles.error} `
            : styles.inputName

        return (
            <div>
                <input className={classForError}
                       onChange={this.onTypeInput}
                       onKeyPress={this.onEnterPress}
                       ref={this.props.refer}
                       type="text"
                       placeholder="Type your name">
                </input>
            </div>
        )
    }
}

export default InputName;
