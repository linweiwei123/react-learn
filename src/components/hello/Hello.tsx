import './hello.css';
import * as React from 'react';
import {IHelloProps} from "./interface";

const Hello = ({ name, level = 1, clickCounts, onIncrement, onDecrement, addClickCounts} : IHelloProps) => {

    if(level <= 0){
        throw new Error('level 不能小等于0');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello { name + getExclamationMarks(level)}
            </div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <div>总计: {clickCounts} </div>
            <button onClick={addClickCounts}>计数</button>
        </div>
    )
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Hello;