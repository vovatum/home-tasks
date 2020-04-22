import React from 'react';
import styles from './CountBlock.module.css'
import Count from "./Counter/Counter";
import InputName from "./InputName/InputName";
import ButtonPush from "./ButtonPush/ButtonPush";

class CountBlock extends React.Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        let names = this.props.state.inputName.map(name => <li>{name}</li>)
        return (
            <div>
                <div className={styles.container}>
                    <Count countValue={this.props.state.countValue}/>
                    {/*<InputName onButton={this.props.onButton}/>*/}
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
