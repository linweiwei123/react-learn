import * as React from 'react';
import styles from './header.scss';
import classNames from 'classnames';

let cx = classNames.bind(styles);

export default () => {

  const logoWrapperClassName = cx({
    [styles.headerItem]: true,
    [styles.headerCenter]: true
  });

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={logoWrapperClassName}>
          <div className={styles.logo} />
        </div>
        <div className={styles.user}>
          <div className={styles.userContainer}>
            <img className={styles.userImg} src={require("../../assets/images/user.jpeg")} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
};
