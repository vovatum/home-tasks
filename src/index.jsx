import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let inputNameRef = React.createRef();

let state = {
    countValue: 40,
    inputName: [],
    idCount: 0
}

const onButton = () => {
    // alert(`Hi, ${inputNameTemp}`)
    let countValueTemp = state.countValue
    countValueTemp += 1
    let inputNameValue = inputNameRef.current.value
    let inputNameTemp = {id: state.idCount + 1, name: inputNameValue}
    inputNameRef.current.value = null
    let nameInputTemp = [...state.inputName, inputNameTemp];
    state =
        {
            countValue: countValueTemp,
            inputName: nameInputTemp,
            idCount: inputNameTemp.id
        }
    rerenderEntireTree(state)
}

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 onButton={onButton}
                 inputNameRef={inputNameRef}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
