import React, { useState } from 'react';

export default function Counter(props) {
    const [clickCount, setClickCount] = useState(0);

    const handlePlus = () => {
        setClickCount((prevClickCount) => prevClickCount + 1)
    }

    const handleMinus = () => {
        setClickCount((prevClickCount) => prevClickCount - 1)
    }

    const onSubmit = () => {
        this.props.onUpdate(this.clickCount)
    }

  return (
    <div>
     
            <input
            min={0}
            max={9}
            value={clickCount}
            onSubmit={onSubmit} />
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
       
    </div>
  );
}