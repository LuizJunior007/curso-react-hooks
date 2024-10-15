import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { AppContext } from './components/context/App';
import { Div } from './components/Div';

const globalState = {
    title: 'Olá mundo',
    body: 'Meu parágrafo',
    counter: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'mudar':
            console.log('Chamou mudar com este payload: ' + action.payload);
            return { ...state, title: 'Mudou' };
        case 'inverter':
            console.log('Chamou inverter');
            const { title } = state;

            return { ...state, title: title.split('').reverse().join('') };

        default:
            console.log('Ok');
    }

    console.log('Nenhum action encontrada');

    return { ...state };
}

function App() {
    const [state, dispatch] = useReducer(reducer, globalState);
    const { counter, title, body } = state;

    return (
        <div>
            <h1>
                {title} {counter}
            </h1>

            <button
                onClick={() =>
                    dispatch({
                        type: 'mudar',
                        payload: new Date().toLocaleString('pt-br'),
                    })
                }
            >
                counter
            </button>

            <button onClick={() => dispatch({ type: 'inverter' })}>
                inverter
            </button>
        </div>
    );
}

export default App;
