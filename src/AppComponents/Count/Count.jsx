import React from 'react';
import styles from './Count.module.css'

class Count extends React.Component {

    constructor(props) {
        super(props)
        this.countValueRef = React.createRef()
        this.nameInputRef = React.createRef()
    }

    state = {
        countValue: 40
    }

    counter = () => {
        let countValueTemp = this.state.countValue
        countValueTemp += 1
        this.setState({
            countValue: countValueTemp
        })
        let nameInput = this.nameInputRef.current.value
        this.nameInputRef.current.value = null
        alert(`Hi, ${nameInput}`)
    }

    render = () => {
        return (
            <div className={styles.container}>
                <div>
                    <span className={styles.spanCount}>
                        {this.state.countValue}
                    </span>
                </div>
                <div>
                    <input ref={this.nameInputRef}
                           type="text"
                           placeholder="Type your name">
                    </input>
                </div>
                <div>
                    <button onClick={this.counter}
                            className={styles.push}>
                        push me
                    </button>
                </div>
            </div>
        )
    };
}

export default Count;
