import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";

const App = () => {
    return (
        <div className={styles.app}>
            <MyNameIs/>
            <Message/>
        </div>
    )
};

export default App;
