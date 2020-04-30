import React from 'react';
import styles from './CoInBuBlock.module.css'
import InputName from "./InputName/InputName";
import ButtonPush from "./ButtonPush/ButtonPush";

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
                <div className={styles.countBlock}>
                    <InputName state={this.state}
                               addName={this.addName}
                               createInBuState={this.createInBuState}
                               inputNameTarget={this.props.inputNameTarget}/>
                    <ButtonPush addName={this.addName}/>
                    {/*// onAddNameClick={this.onAddNameClick}*/}
                </div>
            </div>
        )
    };
}

export default CoInBuBlock;
