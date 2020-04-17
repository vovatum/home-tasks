import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import Count from "./AppComponents/Count/Count";

const App = () => {

    return (
        <div className={styles.app}>
            <MyNameIs/>
            <Message/>
            <Count/>
        </div>
    )
}

export default App;
