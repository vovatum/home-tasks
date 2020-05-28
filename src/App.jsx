import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'
import NavBar from "./AppComponents/NavBar/NavBar";
import Monday from "./AppComponents/Monday/Monday";
import Tuesday from "./AppComponents/Tuesday/Tuesday";
import {restoreState, saveState} from "./AppComponents/LocStorFunctions";
import Download from "./AppComponents/Download/Download";

class App extends React.Component {

    state = {
        countValue: 40,
        names: [],
        nameId: 0,
        name: '',
        // loading: true
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
                    name: '',
                }, () => {
                    saveState(this.state)
                }
            )
        }
    }

    componentDidMount() {
        this.setState(restoreState(), () => {
            setTimeout(() => {
                this.setState({loading: false})
            }, 3000)
        })
    }

    render = () => {

        return (
            <div className={styles.app}>
                <NavBar/>
                {this.state.loading
                    ? <Download/>
                    : <div className={styles.days}>
                        <Route path='/monday' render={() =>
                            <Monday
                                state={this.state}
                                    onButton={this.onButton}
                                    inputNameTarget={this.inputNameTarget}
                            />}/>
                        <Route path='/tuesday' render={() =>
                            <Tuesday/>}/>
                    </div>}
            </div>
        )
    }
}

export default App
