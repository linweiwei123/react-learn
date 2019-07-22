import * as React from 'react';
import styles from './countBlock.scss';
import { ICount } from '../../../actions/home';

const CountBlock = (count: ICount) => {

  return (
    <div className={styles.container}>
      <div className={`${styles.statusBlock} ${styles.building}`}>
        <div className="icon-cog"/>
        <span className={styles.text}>Building</span>
        <div className={styles.value}>{count.building}</div>
      </div>
      <div className={`${styles.statusBlock} ${styles.idle}`}>
        <div className="icon-coffee"/>
        <span className={styles.text}>Idle</span>
        <div className={styles.value}>{count.idle}</div>
      </div>
      <div className={styles.typeBlock}>
        <div className={styles.typeItem}>
          <span className={styles.name}>ALL</span>
          <span className={styles.typeValue}>{count.total}</span>
        </div>
        <div className={styles.typeItem}>
          <span className={styles.name}>PHYSICAL</span>
          <span className={styles.typeValue}>{count.physical}</span>
        </div>
        <div className={styles.typeItem}>
          <span className={styles.name}>VIRTUAL</span>
          <span className={styles.typeValue}>{count.virtual}</span>
        </div>
      </div>
    </div>
  )
};

export default CountBlock