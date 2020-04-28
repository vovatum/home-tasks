import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import CountBlock from "./AppComponents/CountBlock/CountBlock";

const App = (props) => {


    return (
        <div className={styles.app}>
            <MyNameIs state={props.state}/>
            <Message/>
            <CountBlock state={props.state}
                        onButton={props.onButton}
                        refer={props.inputNameRef}/>
        </div>
    )
}

export default App;
