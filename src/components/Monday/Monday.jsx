import React from 'react';
import styles from '../../App.module.css';
import MyNameIs from "./MyNameIs/MyNameIs";
import Message from "./Message/Messаge";
import CoInBuBlock from "./CoInBuBlock/CoInBuBlock";

class Monday extends React.Component {

    render = () => {

        return (
            <div className={styles.monday}>
                <MyNameIs/>
                <Message/>
                <CoInBuBlock state={this.props.state}
                             onButton={this.props.onButton}
                             inputNameTarget={this.props.inputNameTarget}/>
            </div>
        )
    }
}

export default Monday
