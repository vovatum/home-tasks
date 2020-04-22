import React from 'react';
import styles from './CountBlock.module.css'
import Counter from "./Counter/Counter";
import InputName from "./InputName/InputName";
import ButtonPush from "./ButtonPush/ButtonPush";

class CountBlock extends React.Component {

    render = () => {
        let names = this.props.state.inputName.map(name => <li>{name}</li>)
        return (
            <div>
                <div className={styles.container}>
                    <Counter countValue={this.props.state.countValue}/>
                    <InputName onButton={this.props.onButton}
                               refer={this.props.refer}/>
                    <ButtonPush onButton={this.props.onButton}/>
                </div>
                <div>
                    {names}
                </div>
            </div>
        )
    };
}

export default CountBlock;
