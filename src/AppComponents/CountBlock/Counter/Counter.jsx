import React from 'react';
import styles from './Counter.module.css'

const Count = (props) => {
    return (
        <div>
            <span className={styles.spanCount}>
                {props.countValue}
            </span>
        </div>

    )
}

export default Count;
