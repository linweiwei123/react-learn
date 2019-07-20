import styles from './home.scss';
import * as React from 'react';
import classNames from 'classnames';
import { IHelloProps } from './interface';
import { Link } from 'react-router-dom'
import { homeArticles } from '../../services/home';

const cx = classNames.bind(styles);

class Home extends React.Component<IHelloProps, any> {

  constructor(props: IHelloProps){
    super(props);
  }

  componentWillMount(){
    this.props.onLoad(homeArticles())
  }

  render(){
    const {level, name} = this.props;
    if (level <= 0) {
      throw new Error('level 不能小等于0');
    }

    const evenBlue = cx({
      [styles.title]: true,
      [styles['button--blue']]: level%2 === 0
    });

    return (
      <div className={styles.hello}>
        <div className={evenBlue}>
          Hello {name + getExclamationMarks(level)}
        </div>

        <div className={styles.message}>
          I am blue
        </div>

        <ul>
          {
            this.props.articles.map((article, index) => {
                return (
                  <div key={index}>
                    <div>{article.title}</div>
                    <div>{article.author}</div>
                    <div>{article.introduce}</div>
                    <div>{article.updateTime}</div>
                    <div>{article.tags}</div>
                  </div>
                )
              }
            )
          }
        </ul>

        <ul>
          <li><Link to="/login">去登录页面</Link></li>
          <li><Link to="/article">文章</Link></li>
        </ul>
      </div>
    )
  }

}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Home;