import React from 'react';
import InputName from "../InputName/InputName";
import ButtonPush from "../ButtonPush/ButtonPush";
import styles from './InBuBlock.module.css'

class CoInBuBlock extends React.Component {

    state = {
        error: false,
        title: ''
    }

    createInBuState = (inputNameTarget) => {
        this.setState({
            title: inputNameTarget,
            error: false
        })
        this.props.inputNameTarget(inputNameTarget)
    }

    addName = () => {
        if (this.state.title === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
        }
        this.props.onButton()
        this.setState({title: ''})
    }

    render = () => {
        return (
            <div className={styles.container}>
                    <InputName state={this.state}
                               addName={this.addName}
                               createInBuState={this.createInBuState}
                               inputNameTarget={this.props.inputNameTarget}/>
                    <ButtonPush addName={this.addName}/>
            </div>
        )
    };
}

export default CoInBuBlock;
