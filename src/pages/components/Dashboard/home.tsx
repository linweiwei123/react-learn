import styles from './home.scss';
import * as React from 'react';
import classNames from 'classnames';
import { IHelloProps } from './interface';
import { Link } from 'react-router-dom'
import { homeArticles } from '../../../services/home';

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

    return (
      <div className={styles.hello}>
        <ul>
          <li><Link to="/help">去登录页面</Link></li>
          <li><Link to="/article">文章</Link></li>
        </ul>
      </div>
    )
  }

}


export default Home;