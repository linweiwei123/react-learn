import * as React from 'react';
import styles from './queryBlock.scss';
import { useState } from 'react';
import classNames from 'classnames';

const cx = classNames.bind(styles);
const typeTags = ['All', 'Physical', 'Virtual'];
const showTypes = ['card', 'list'];

const QueryBlock = ({ onChangeType, onSearchName }: any) => {

  const [activeTag, setActiveTag] = useState(typeTags[0]);
  const [activeShowType, setActivShowType] = useState(showTypes[1]);

  const changeTag = (tag: string) => {
    setActiveTag(tag);
    onChangeType(tag);
  };

  const changeShowType = (showType: string) => {
    setActivShowType(showType);
  };

  return (
    <div className={styles.container}>
      <div className={styles.typeTags}>
        {
          typeTags.map((item, index) => {
            const tagClassName = cx({
              [styles.tag]: true,
              [styles.active]: item === activeTag
            });
            return  <div key={index} className={tagClassName} onClick={()=> changeTag(item) }>{item}</div>
          })
        }
      </div>
      <div className={styles.search}>
        <div className={styles.searchContainer}>
          <span className="icon-search"></span>
          <input type="text" className={styles.searchInput} onChange={(e) => onSearchName(e.target.value) }/>
        </div>
      </div>
      <div className={styles.showTypeButton}>
        <div className={`icon-th-card ${activeShowType === 'card' ? styles.active: ''}`} onClick={() => changeShowType('card')}></div>
        <div className={`icon-th-list ${activeShowType === 'list' ? styles.active: ''}`} onClick={() => changeShowType('list')}></div>
      </div>
    </div>
  )
};

export default QueryBlock