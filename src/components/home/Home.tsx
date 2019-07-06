import './hello.css';
import * as React from 'react';
import { IHelloProps } from './interface';
import { Link } from 'react-router-dom'

const Home = ({name, level = 1, clickCounts, onIncrement, onDecrement, addClickCounts}: IHelloProps) => {

  if (level <= 0) {
    throw new Error('level 不能小等于0');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(level)}
      </div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <div>总计: {clickCounts} </div>
      <button onClick={addClickCounts}>计数</button>

      <ul>
        <li><Link to="/login">去登录页面</Link></li>
        <li><Link to="/article">文章</Link></li>
      </ul>
    </div>
  )
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Home;