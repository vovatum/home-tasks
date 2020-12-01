import React from 'react';
import styles from './MyNameIs.module.css';

const qualities = [
    {id: 1, quality: 'Перфекционист'},
    {id: 2, quality: 'Сочувствующий'},
    {id: 3, quality: 'Нигилист'},
];

let qualitiesSpan = qualities.map(item => {
    if (item.id === 2) {
        return <span key={item.id}
                     className={styles.fontColor}>{item.quality}</span>;
    } else {
        return <span key={item.id}>{item.quality}</span>;
    }
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
