import React, {useState} from "react";
export default function Counter(){
    const [count, setCount] = useState(0)

    const incrementCount = () =>{
        setCount (c => c + 1)
    }
    const incrementCount5 = () =>{
        setCount (c => c + 5)
    }
    const decrementCount = () =>{
        setCount (c => c - 1)
    }    
    const decrementCount5 = () =>{
        setCount (c => c - 5)
    }
    const resetCount = () =>{
        setCount (c => c = 0)
    }
    const randomCount = () => {
        setCount(Math.floor((Math.random()*(999 - (- 999) + 1)) + (-999)))
    }   
    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br />{count}
            </p>
            &nbsp;
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>

            <br />
            <button className="button-container-increment" onClick={incrementCount5}>Increment</button>
            <button className="button-container-increment" onClick={randomCount}>Random</button>
            <button className="button-container-decrement" onClick={decrementCount5}>Decrement</button>
        </div>
    )
}