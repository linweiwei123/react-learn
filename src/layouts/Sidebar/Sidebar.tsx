import * as React from 'react';
import styles from './sidebar.scss';
import routes from '../../bootstrap/routes.config';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.container}>
        {
          routes.map( (item, index) => {
            return (
              <li key={index} className={styles.menu}>
                <Link to={item.path}>
                  <div className="icon-sitemap"></div>
                  <div>{item.name.toUpperCase()}</div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};
