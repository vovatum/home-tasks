import React from 'react';
import styles from '../../App.module.css';
import TodoList from "./TodoList/TodoList";

class Tuesday extends React.Component {

    render = () => {

        return (
            <div className={styles.tuesday}>
                <TodoList/>
            </div>
        )
    }
}

export default Tuesday
