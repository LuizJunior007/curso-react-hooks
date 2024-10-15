import { useContext } from 'react';
import { GlobalContext } from '../context/App';

export function H1() {
    const theContext = useContext(GlobalContext);
    const { state } = theContext;

    return <h1>{state.title}</h1>;
}
