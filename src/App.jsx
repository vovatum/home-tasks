import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import Count from "./AppComponents/Count/Count";

class App extends React.Component {

    state = {
        countValue: 40,
        inputName: []
    }

    onButton = (countValueTemp, inputNameTemp) => {
        alert(`Hi, ${inputNameTemp}`)
        let nameInputTemp = this.state.inputName
        nameInputTemp.push(inputNameTemp)

        this.setState(
            {
                countValue: countValueTemp,
                inputName: nameInputTemp
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
