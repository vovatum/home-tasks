import React from 'react';
import styles from './Names.module.css'

const Names = (props) => {

    let names = props.names
        .map(name => <li key={name.id}>{name.name}</li>)

    return (
        <div className={styles.names}>
            {names}
        </div>
    )
}

export default Names;
