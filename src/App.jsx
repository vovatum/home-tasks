import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import CountBlock from "./AppComponents/CountBlock/CountBlock";

class App extends React.Component {

    inputNameRef = React.createRef();

    state = {
        countValue: 40,
        inputName: [],
        idCount: 0
    }

    onButton = () => {
        // alert(`Hi, ${inputNameTemp}`)
        let countValueTemp = this.state.countValue
        countValueTemp += 1
        let inputNameValue = this.inputNameRef.current.value
        let inputNameTemp = {id: this.state.idCount+1, name: inputNameValue}
        this.inputNameRef.current.value = null
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
                            refer={this.inputNameRef}/>
            </div>
        )
    }
}

export default App;
