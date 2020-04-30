import React from 'react';
import styles from './CoInBuBlock.module.css'
import Counter from "./Counter/Counter";
import Names from "./Names/Names";
import InBuBlock from "./InBuBlock";

class CoInBuBlock extends React.Component {

    render = () => {

        return (
            <div className={styles.container}>
                <div className={styles.countBlock}>
                    <Counter countValue={this.props.state.countValue}/>
                    <InBuBlock onButton={this.props.onButton}
                               inputNameTarget={this.props.inputNameTarget}/>
                </div>
                <div>
                    <Names names={this.props.state.names}/>
                </div>
            </div>
        )
    };
}

export default CoInBuBlock;
