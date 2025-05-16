import { useCounter } from "./useCounter";


export default function CounterComponent() {

    const{count, decrement, increment, reset} = useCounter(0);

    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

            <button onClick={reset}>Reset</button>
        </>
    );
}





