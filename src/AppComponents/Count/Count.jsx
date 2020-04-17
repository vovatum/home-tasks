import React from 'react';
import styles from './Count.module.css'

const Count = () => {

    let countUpNameInput = () => {
        let spanCount = +document.getElementById('spanCount').innerText
        spanCount += 1
        document.getElementById('spanCount').innerText = String(spanCount)
        let nameInput = document.getElementsByTagName("input")[0].value
        alert(`Hi, ${nameInput}`)
        document.getElementsByTagName("input")[0].value = ''
    }

    return (
        <div className={styles.container}>
            <div>
                    <span id={'spanCount'}
                          className={styles.spanCount}>
                        40
                    </span>
            </div>
            <div>
                <input type="text"
                       placeholder="Type your name">
                </input>
            </div>
            <div>
                <button onClick={countUpNameInput}
                        className={styles.push}>
                    push me
                </button>
            </div>
        </div>
    )
};

export default Count;
