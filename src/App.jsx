import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import CoInBuBlock from "./AppComponents/CoInBuBlock/CoInBuBlock";

class App extends React.Component {

    state = {
        countValue: 40,
        names: [],
        nameId: 0,
        name: ''
    }

    inputNameTarget = (inputNameTarget) => {
        this.setState({name: inputNameTarget})
    }

    onButton = () => {
        if (this.state.name !== '') {
            let countValueTemp = this.state.countValue
            countValueTemp += 1
            alert(`В инпуте имя, ${this.state.name}`)
            let newName = {id: this.state.nameId + 1, name: this.state.name}
            let namesArr = [...this.state.names, newName]
            this.setState(
                {
                    countValue: countValueTemp,
                    names: namesArr,
                    nameId: newName.id,
                    name: ''
                }
            )
        }
    }

    render = () => {

        return (
            <div className={styles.app}>
                <MyNameIs/>
                <Message/>
                <CoInBuBlock state={this.state}
                             onButton={this.onButton}
                             inputNameTarget={this.inputNameTarget}/>
            </div>
        )
    }
}

export default App;
