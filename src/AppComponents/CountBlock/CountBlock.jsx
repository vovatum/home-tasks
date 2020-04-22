import React from 'react';
import styles from './CountBlock.module.css'
import Count from "./Counter/Counter";

class CountBlock extends React.Component {

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
                    <Count countValue={this.props.state.countValue}/>
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

export default CountBlock;
