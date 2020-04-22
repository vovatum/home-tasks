import React from 'react';
import styles from './InputName.module.css'

const InputName  = (props) => {

        return (
            <div>
                <input className={styles.inputName}
                       ref={props.refer}
                       type="text"
                       placeholder="Type your name">
                </input>
            </div>
        )
}

export default InputName;
