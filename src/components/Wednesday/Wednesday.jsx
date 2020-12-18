import React from 'react';
import Download from "../universal/Download/Download";

class Wednesday extends React.Component {

    state = {
        checkboxIsDone: false,
    }

    onChangeTheme = (e) => {
        this.props.changeTheme(e.target.value)
    }
    onChangeSendCheckbox = (e) => {
        this.setState({checkboxIsDone: e.currentTarget.checked})
    }
    onClick = () => {
        this.props.setRequest(this.state.checkboxIsDone)
    }

    render() {
        console.log(this.props)
        return (
            <div className={this.props.class}>
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
                           checked={this.state.checkboxIsDone}
                           onChange={this.onChangeSendCheckbox}
                    />
                    <button disabled={this.props.isFetching}
                            onClick={this.onClick}
                    >SEND
                    </button>
                </div>
                {this.props.isFetching
                    ? <Download/>
                    : <span className={'spinner'}>{this.props.response}</span>
                }
            </div>
        )
    }
}

export default Wednesday
