import React from 'react';
import styles from "../styles/loader.module.scss"

const Loader = () => {
    return (
        <div className={styles.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;