import React from 'react';
import styles from './Wednesday.module.css';
import Download from "../universal/Download/Download";

class Wednesday extends React.Component {

    state = {
        classWednesday: styles.bordo,
        checkboxSendIsDone: false,
        downloading: false,
    }

    onChangeTheme = (e) => {
        this.props.changeTheme(e.target.value)
        this.setState({classWednesday: e.target.value})
    }
    onChangeSendCheckbox = (e) => {
        this.setState({checkboxSendIsDone: e.currentTarget.checked})
    }
    onClick = () => {
        this.setState({downloading: true})
        this.props.getPostRequest(this.state.checkboxSendIsDone)
        // true
        //     ? this.setState({response: 'Успех', downloading: false})
        //     : this.setState({response: `Запрос не удался :(`, downloading: false})
    }

    render() {
        console.log(this.props)
        return (
            <div className={this.state.classWednesday}>
                {this.props.themes.map(theme => {
                    return (
                        <span key={theme.name}>
                        <input type={'radio'}
                               value={theme.class}
                               checked={theme.checked}
                               onChange={this.onChangeTheme}
                        />
                            {theme.name}
                         </span>
                    )
                })}
                <div>
                    <input type="checkbox"
                           checked={this.state.checkboxSendIsDone}
                           onChange={this.onChangeSendCheckbox}
                    />
                    <button disabled={this.state.downloading}
                            onClick={this.onClick}
                    >SEND
                    </button>
                </div>
                {this.state.downloading
                    ? <Download/>
                    : <span className={'spinner'}>{this.state.response}</span>
                }
            </div>
        )
    }
}

export default Wednesday
