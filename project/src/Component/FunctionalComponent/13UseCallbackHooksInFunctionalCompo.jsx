import React, { useCallback, useState } from 'react';


const funccount = new Set();
const UseCallbackHooksInFunctionalCompo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // const incrementCounter = () => {
    //     console.log("incrementCounter");
    //     setCount(count + 1);
    // };
    // const decrementCounter = () => {
    //     console.log("decrementCounter");
    //     setCount(count - 1);
    // };
    // const incrementNumber = () => {
    //     console.log("incrementNumber");
    //     setNumber(number + 1);
    // };
    // const incrementCounter = useCallback(() => {
    //     setCount(count + 1);
    // });
    // const decrementCounter = useCallback(() => {
    //     setCount(count - 1);
    // });
    // const incrementNumber = useCallback(() => {
    //     setNumber(number + 1);
    // });
    // const incrementCounter = useCallback(() => {
    //     setCount(count + 1);
    // }, []);
    // const decrementCounter = useCallback(() => {
    //     setCount(count - 1);
    // }, []);
    // const incrementNumber = useCallback(() => {
    //     setNumber(number + 1);
    // }, []);
    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log(funccount);
    return (
        <>
            <div class="alert alert-warning">
                <h2>What is the callback function of React hook?</h2>
                <p>A react useCallback hook is a callback that takes the components you want to optimize and a callback variable. JavaScript memoizes the variable for you and creates it on each render to remain the same. This eliminates the need to recalculate values unnecessarily.</p>
            </div>
            <p>Improving performance In React applications includes preventing unnecessary renders and reducing the time a render takes to propagate. useCallback() can help us prevent some unnecessary renders and therefore gain a performance boost.</p>
            <p>Going back to React, when a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.</p>
            <p> useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.</p>
            {/* <button onClick={handler}>Change State Of Parent Component</button> */}
            <button onClick={incrementCounter}>Increase counter</button>
            <button onClick={decrementCounter}>Decrease Counter</button>
            <button onClick={incrementNumber}>increase number</button>
            <p className='my-5' >Count : {count} , number {number}</p>

            <div class="alert alert-success">
                <img src="https://intellipaat.com/blog/wp-content/uploads/2023/07/Advantages-of-useCallback-Hook-in-React.jpg" alt="" />

            </div>
        </>
    );
};

export default UseCallbackHooksInFunctionalCompo;