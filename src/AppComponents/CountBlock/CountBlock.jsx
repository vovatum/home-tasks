import React from 'react';
import styles from './CountBlock.module.css'
import Counter from "./Counter/Counter";
import InputName from "./InputName/InputName";
import ButtonPush from "./ButtonPush/ButtonPush";
import Names from "./Names/Names";

class CountBlock extends React.Component {

    render = () => {

        return (
            <div className={styles.container}>
                <div className={styles.countBlock}>
                    <Counter countValue={this.props.state.countValue}/>
                    <InputName onButton={this.props.onButton}
                               refer={this.props.refer}/>
                    <ButtonPush onButton={this.props.onButton}/>
                </div>
                <div>
                    <Names names={this.props.state.inputName}/>
                </div>
            </div>
        )
    };
}

export default CountBlock;
