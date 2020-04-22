import React from 'react';
import styles from '../Counter/Counter.module.css'

class InputName extends React.Component {

    constructor(props) {
        super(props)
        this.inputNameRef = React.createRef()
    }
    // onButton = () => {
    //
    //     let inputName = this.inputNameRef.current.value
    //     this.inputNameRef.current.value = null
    //     this.props.onButton(inputName)
    // }
    render = () => {

        this.props.onButton(this.inputNameRef)
        return (
            <div>
                <input className={styles.inputName}
                       ref={this.inputNameRef}
                       type="text"
                       placeholder="Type your name">
                </input>
            </div>
        )
    }
}

export default InputName;
