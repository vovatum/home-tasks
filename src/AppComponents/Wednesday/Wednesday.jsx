import React from 'react';
import styles from './Wednesday.module.css';
import axios from "axios";

class Wednesday extends React.Component {

    state = {
        themes: [
            {name: 'Брют', checked: null},
            {name: 'Розовое сухое', checked: null},
            {name: 'Бордо', checked: null}
        ],
        isDone: false
    }

    onChangedStyles = (event) => {
        this.props.changedStyles(event.target.value)
    }

    isDoneChanged = (event) => {
        this.setState({
            isDone: event.currentTarget.checked
        })
    }

    postSend = (success) => {
        axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,
            {success: this.state.isDone}
        )
            .then(res => {
                console.log(res)
            })
    }

    render() {
// debugger
        let classWednesday
        switch (this.props.state) {
            case 'Брют':
                classWednesday = styles.brut
                break
            case 'Розовое сухое':
                classWednesday = styles.rose
                break
            default:
                classWednesday = styles.bordo
        }

        let checked = {
            ...this.state,
            themes: this.state.themes.map(theme => {
                if (theme.name === this.props.state) {
                    return {
                        ...theme,
                        checked: true
                    }
                } else {
                    return {
                        ...theme,
                        checked: false
                    }
                }
            })
        }

        return (
            <div className={classWednesday}>
                {checked.themes.map(theme => {
                    return (
                        <span>
                        <input
                            type={'radio'}
                            name={'theme'}
                            value={theme.name}
                            checked={theme.checked}
                            onChange={this.onChangedStyles}
                        />
                            {theme.name}
                    </span>
                    )
                })}
                <div>
                    <input
                        type="checkbox"
                        checked={this.state.isDone}
                        onChange={this.isDoneChanged}
                    />
                    <button
                        onClick={this.postSend}
                    >SEND
                    </button>
                </div>
            </div>
        )
    }
}

export default Wednesday
