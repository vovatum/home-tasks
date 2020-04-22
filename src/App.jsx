import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import CountBlock from "./AppComponents/CountBlock/CountBlock";

class App extends React.Component {

    inputNameRef = React.createRef();

    state = {
        countValue: 40,
        inputName: []
    }

    onButton = () => {
        // alert(`Hi, ${inputNameTemp}`)
        let countValueTemp = this.state.countValue
        countValueTemp += 1
        let inputNameTemp = this.inputNameRef.current.value
        this.inputNameRef.current.value = null
        let nameInputTemp = this.state.inputName
        nameInputTemp.push(inputNameTemp)
        // let nameInputTemp = [...this.state.inputName, inputNameTemp];
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
                <MyNameIs state={this.state}/>
                <Message/>
                <CountBlock state={this.state}
                            onButton={this.onButton}
                            refer={this.inputNameRef}/>
            </div>
        )
    }
}

export default App;
