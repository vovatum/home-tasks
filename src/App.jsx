import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import Count from "./AppComponents/Count/Count";

class App extends React.Component {

    state = {
        countValue: 40
    }

    onButton = (countValueTemp, stateInputTemp) => {
        alert(`Hi, ${stateInputTemp}`)

        this.setState(
            {
                countValue: countValueTemp,
                nameInput: stateInputTemp
            }
        )
    }

    render = () => {
        return (
            <div className={styles.app}>
                <MyNameIs/>
                <Message/>
                <Count state={this.state}
                       onButton={this.onButton}/>
            </div>
        )
    }
}

export default App;
