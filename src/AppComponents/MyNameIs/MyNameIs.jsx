import React from 'react';
import styles from './MyNameIs.module.css';

const qualities = [
    'Перфекционист',
    'Сочувствующий',
    'Нигилист'
];

let qualitiesSpan = qualities.map(quality => {
    return <span>{quality}</span>
});

const MyNameIs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.myNameIs}>
                Химиченко Владимир Александрович
            </div>
            <div className={styles.qualities}>
                {qualitiesSpan}
            </div>
        </div>
    )
};

export default MyNameIs;
