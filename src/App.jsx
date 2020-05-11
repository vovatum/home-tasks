import React from 'react';
import styles from './App.module.css';
import MyNameIs from "./AppComponents/MyNameIs/MyNameIs";
import Message from "./AppComponents/Message/Messаge";
import CoInBuBlock from "./AppComponents/CoInBuBlock/CoInBuBlock";
import NavBar from "./AppComponents/NavBar/NavBar";
import {Route} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'
import TodoList from "./AppComponents/TodoList/TodoList";

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
            // alert(`В инпуте имя, ${this.state.name}`)
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
                <NavBar/>
                <div className={styles.days}>
                    <Route path='/monday' render={() =>
                        <div className={styles.monday}>
                            <MyNameIs/>
                            <Message/>
                            <CoInBuBlock state={this.state}
                                         onButton={this.onButton}
                                         inputNameTarget={this.inputNameTarget}/>
                        </div>}/>
                    <Route path='/tuesday' render={() =>
                        <div className={styles.tuesday}>
                            <TodoList/>
                        </div>}/>
                </div>
            </div>
        )
    }
}

export default App;
