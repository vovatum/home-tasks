import React from 'react';
import styles from './InputName.module.css'

class InputName extends React.Component {

    state = {
        error: true,
        title: ''
    }

    onTypeInput = (event) => {
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
                       ref={this.props.refer}
                       type="text"
                       placeholder="Type your name">
                </input>
            </div>
        )
    }
}

export default InputName;
