import React from 'react';
import styles from './InputName.module.css'

class InputName extends React.Component {

    onTypeInput = (event) => {
        this.props.createInBuState(event.currentTarget.value)
    }

    onEnterPress = (event) => {
        if (event.key === 'Enter')
            this.props.addName()

    }

    render = () => {

        let classForError = this.props.state.error
            ? `${styles.inputName} ${styles.error} `
            : styles.inputName

        return (
            <div>
                <input className={classForError}
                       onChange={this.onTypeInput}
                       onKeyPress={this.onEnterPress}
                       value={this.props.state.title}
                       type="text"
                       placeholder="Type your name">
                </input>
            </div>
        )
    }
}

export default InputName;
