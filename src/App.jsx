import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'
import NavBar from "./AppComponents/NavBar/NavBar";
import Monday from "./AppComponents/Monday/Monday";
import Tuesday from "./AppComponents/Tuesday/Tuesday";
import {restoreState, saveState} from "./AppComponents/LocStorFunctions";
import Download from "./AppComponents/Download/Download";
import {connect} from "react-redux";
import Wednesday from "./AppComponents/Wednesday/Wednesday";

class App extends React.Component {

    state = {
        countValue: 40,
        names: [],
        nameId: 0,
        name: '',
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
                this.props.loadingFn()
            }, 700)
        })
    }

    render = () => {
        return (
            <div className={styles.app}>
                <NavBar/>
                {this.props.loading
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
                        <Route path='/wednesday' render={() =>
                            <Wednesday/>}/>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadingFn: () => {
            const action = {
                type: "SET_LOADING",
                loading: false
            }
            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
