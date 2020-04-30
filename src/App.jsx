import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import CountBlock from "./AppComponents/CountBlock/CountBlock";

class App extends React.Component {

    inputNameRef;

    state = {
        countValue: 40,
        inputName: [],
        idCount: 0
    }

    inputTargetValue = (inputTargetValue) => {
        this.inputNameRef = inputTargetValue
    }

    onButton = () => {
        let countValueTemp = this.state.countValue
        countValueTemp += 1
        // alert(`Hi, ${this.inputNameRef}`)
        let inputNameTemp = {id: this.state.idCount + 1, name: this.inputNameRef}
        let nameInputTemp = [...this.state.inputName, inputNameTemp];
        this.setState(
            {
                countValue: countValueTemp,
                inputName: nameInputTemp,
                idCount: inputNameTemp.id
            }
        )
    }

    render = () => {

        return (
            <div className={styles.app}>
                <MyNameIs state={this.state}/>
                <Message/>
                <CountBlock state={this.state}
                            onButton={this.onButton}
                            inputTargetValue={this.inputTargetValue}
                            refer={this.inputNameRef}/>
            </div>
        )
    }
}

export default App;
