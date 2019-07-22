import * as React from 'react';
import styles from './sidebar.scss';
import routes from '../../bootstrap/routes.config';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const Sidebar = (props: any) => {

  const {pathname} = props.location;

  return (
    <div className={styles.sidebar}>
      <ul className={styles.container}>
        {
          routes.map( (item, index) => {

            const menuClass = cx({
              [styles.menu]: true,
              [styles.active]: item.path === pathname,
            });

            return (
              <li key={index} className={menuClass}>
                <Link to={item.path}>
                  <div className={item.icon}/>
                  <div className={styles.text}>{item.name.toUpperCase()}</div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default withRouter(props => Sidebar(props))
