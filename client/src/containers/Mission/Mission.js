import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Mission.module.scss';
import { cdnPath } from '../../constants';

export default function Mission() {
  return (
    <div className={styles.Mission}>
      <div className={styles.mainBanner}>
        <img
          src={`${cdnPath}/v2/images/mission/directivos.jpg`}
          alt="Mission Banner"
        />
      </div>
      <h1>Mision Cristiana Elim</h1>
      <Link to="/iglesias">Ver iglesias</Link>
    </div>
  );
}
