import React from 'react';
import styles from './ButtonPush.module.css'

const ButtonPush = (props) => {

    let onButtonPush = () => {
        props.onButton()
    }

    return (
        <div>
            <button onClick={onButtonPush}
                    className={styles.push}>
                push me
            </button>
        </div>
    )
}

export default ButtonPush;
