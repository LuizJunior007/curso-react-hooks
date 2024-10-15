import React from 'react';

export default function Button({ increment }) {
    console.log('Filho renderizou');
    return <button onClick={() => increment(10)}>+</button>;
}
