import React from 'react';
import styles from './ButtonPush.module.css'

const ButtonPush = (props) => {

    return (
        <div>
            <button onClick={props.onAddNameClick}
                    className={styles.push}>
                push me
            </button>
        </div>
    )
}

export default ButtonPush;
