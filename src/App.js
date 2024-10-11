import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function eventFn() {
    console.log('H1 clicado');
}

function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // Component didUpdate = executa toda vez que o componente atualiza
    /*useEffect(() => {
        console.log('Componente didUpdate');
    }); */

    // Component didUpdate = executa uma vez
    useEffect(() => {
        document.querySelector('h1')?.addEventListener('click', eventFn);

        // ComponentWillUmount - limpeza
        return () => {
            document.querySelector('h1')?.removeEventListener('click', eventFn);
        };
    }, []);

    // Component dependecia executa toda vez que a dependencia mudar
    useEffect(() => {
        console.log('Counter foi atualizado', counter);
    }, [counter, counter2]);

    return (
        <div className="App">
            <p>Teste 1</p>
            <h1>Contador {counter}</h1>
            <h1>Contador 2 {counter2}</h1>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                +
            </button>
            <button type="button" onClick={() => setCounter2(counter2 + 1)}>
                +
            </button>
        </div>
    );
}

export default App;
