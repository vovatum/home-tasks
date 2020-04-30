import React from 'react';
import styles from './CountBlock.module.css'
import Counter from "./Counter/Counter";
import InputName from "./InputName/InputName";
import ButtonPush from "./ButtonPush/ButtonPush";
import Names from "./Names/Names";

class CountBlock extends React.Component {

    // state = {
    //     error: true,
    //     title: ''
    // }

    onAddNameClick = () => {
        // if(this.props.refer   )
        this.props.onButton()
    }

    render = () => {
        return (
            <div className={styles.container}>
                <div className={styles.countBlock}>
                    <Counter countValue={this.props.state.countValue}/>
                    <InputName refer={this.props.refer}
                               onAddNameClick={this.onAddNameClick}/>
                    <ButtonPush onButton={this.props.onButton}
                                onAddNameClick={this.onAddNameClick}/>
                </div>
                <div>
                    <Names names={this.props.state.inputName}/>
                </div>
            </div>
        )
    };
}

export default CountBlock;
