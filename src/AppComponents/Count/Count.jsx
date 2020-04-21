import React from 'react';
import styles from './Count.module.css'

class Count extends React.Component {

    constructor(props) {
        super(props)
        this.inputNameRef = React.createRef()
    }

    onButton = () => {
        let countValueTemp = this.props.state.countValue
        countValueTemp += 1
        let inputName = this.inputNameRef.current.value
        this.inputNameRef.current.value = null
        this.props.onButton(countValueTemp, inputName)
    }

    render = () => {
        let names = this.props.state.inputName.map(name => <li>{name}</li>)
        return (
            <div>
                <div className={styles.container}>
                    <div>
                    <span className={styles.spanCount}>
                        {this.props.state.countValue}
                    </span>
                    </div>
                    <div>
                        <input className={styles.inputName}
                               ref={this.inputNameRef}
                               type="text"
                               placeholder="Type your name">
                        </input>
                    </div>
                    <div>
                        <button onClick={this.onButton}
                                className={styles.push}>
                            push me
                        </button>
                    </div>
                </div>
                <div>
                    {names}
                </div>
            </div>

        )
    };
}

export default Count;
