import React from 'react';
import styles from '../../App.module.css';

const Wednesday = (props) => {

    let themes = [
        'Брют',
        'Розовое сухое',
        'Бордо'
    ]

    return (
        <div className={styles.wednesday}>
            {themes.map(theme => {
                return (
                    <span>
                        <input
                            type={'radio'}
                            name={'theme'}
                            value={theme}
                            checked
                        />
                        {theme}
                    </span>
                )
            })}
        </div>
    )
}

export default Wednesday
