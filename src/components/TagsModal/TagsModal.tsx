import * as React from 'react';
import styles from './tagsModal.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export interface IPosition {
  x: number,
  y: number
}

const TagsModal = ({isShow = false, position = {x: 0, y: 0}}: any) => {

  const modalClassName = cx({
    [styles.container]: true,
    [styles.show]: isShow
  });

  return (
    <div className={modalClassName} style={{left: position.x, top:position.y}}>
    </div>
  )
};

export default TagsModal