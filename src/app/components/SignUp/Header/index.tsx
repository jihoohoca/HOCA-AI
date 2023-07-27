import React from 'react'
import styles from './style.css'
import frame from '../../../images/Frame.png'


export const Header = () => {
    return (
      <header className={styles.header}>
        <img src={frame} />
      </header>
    );
  };
