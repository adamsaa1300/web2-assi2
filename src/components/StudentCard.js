import React, { useState } from 'react';
import Counter from './Counter';

function StudentCard({ name, major }) {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div className="card mx-auto" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{major}</p>
                <Counter count={count} onIncrement={handleIncrement} />
            </div>
        </div>
    );
}

export default StudentCard;