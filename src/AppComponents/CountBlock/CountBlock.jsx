import React from 'react';
import styles from './CountBlock.module.css'
import Counter from "./Counter/Counter";
import InputName from "./InputName/InputName";
import ButtonPush from "./ButtonPush/ButtonPush";
import Names from "./Names/Names";

class CountBlock extends React.Component {

    // onAddNameClick = () => {
    //     this.props.onButton()
    // }

    render = () => {
        return (
            <div className={styles.container}>
                <div className={styles.countBlock}>
                    <Counter countValue={this.props.state.countValue}/>
                    <InputName refer={this.props.refer}
                               onButton={this.props.onButton}
                               inputTargetValue={this.props.inputTargetValue}/>
                    <ButtonPush onButton={this.props.onButton}
                                // onAddNameClick={this.onAddNameClick}
                                refer={this.inputNameRef}/>

                </div>
                <div>
                    <Names names={this.props.state.inputName}/>
                </div>
            </div>
        )
    };
}

export default CountBlock;
