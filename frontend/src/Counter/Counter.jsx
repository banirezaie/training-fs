import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    return (
        <div>
            <h2 data-testid='header'>My Counter</h2>
            <h2 data-testid='counter' className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`} >{counterValue}</h2>
            <button button data-testid='subtractBtn' onClick={() => {
                setCounterValue(counterValue - inputValue)
            }}>-</button>
            <input
                type='number'
                data-testid='input'
                className='counter-alignment'
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value))
                }}
                value={inputValue}
            />
            <button data-testid='addBtn' onClick={() => {
                setCounterValue(counterValue + inputValue)
            }}>+</button>
        </div>
    );
}

export default Counter;
