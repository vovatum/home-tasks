import React from 'react';
import styles from './Count.module.css'

class Count extends React.Component {

    constructor(props) {
        super(props)
        this.nameInputRef = React.createRef()
    }

    counter = () => {
        let countValueTemp = this.props.state.countValue
        countValueTemp += 1
        let nameInput = this.nameInputRef.current.value
        this.nameInputRef.current.value = null
        this.props.onButton(countValueTemp, nameInput)
    }

    render = () => {
        return (
            <div className={styles.container}>
                {/*<div>*/}
                {/*    <li>*/}
                {/*        {this.state.nameInput}*/}
                {/*    </li>*/}
                {/*</div>*/}
                <div>
                    <span className={styles.spanCount}>
                        {this.props.state.countValue}
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
