import React from 'react';
import styles from './Container.module.scss';

const Container = ({children}) => {
    return (
        <div classname={styles.Container}>
            {children}
        </div>
    );
}

export default Container;
