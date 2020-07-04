import React from 'react';
import styles from './Wednesday.module.css';

class Wednesday extends React.Component {

    state = {
        themes: [
            {name: 'Брют', checked: null},
            {name: 'Розовое сухое', checked: null},
            {name: 'Бордо', checked: null}
        ]
    }

    onChangedStyles = (event) => {
        this.props.changedStyles(event.target.value)
    }

    render() {

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
            </div>
        )
    }
}

export default Wednesday
