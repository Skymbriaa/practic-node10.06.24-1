import React from 'react';
import styles from './Row.module.scss';

const Row = ({children}) => {
    return (
        <div classname={styles.Row}>
            {children}
        </div>
    );
}

export default Row;