import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHooksInFunctionalCompo = () => {

    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)
    useEffect(() => {
        console.log("called useEffect");
        getData()
    })
    const getData = async () => {
        await fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);
        })
    }
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);

        })
        return () => {
            console.log("called return");
        }
    })
    return (
        <>

            <div class="alert alert-warning">
                <h2>What is UseLayoutEffect in React? </h2>
                <p> useLayoutEffect is a React Hook that is similar to useEffect, but it executes synchronously after all DOM mutations. It is primarily used when you need to read layout information from the DOM and make immediate updates, ensuring smoother interactions without causing visual glitches.</p>
            </div>
            <div class="alert alert-success">
                <h2>What is useLayoutEffect used for?</h2>
                <p>The useLayoutEffect hook is similar to the useEffect theme in that it fires synchronously once all DOM loading is completed, rather than asynchronous like the useEffect hook. This can be used to re-render the DOM and read its layout concurrently.</p>

            </div>
            UseEffectHooksInFunctionalCompo
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>

        </>

    );

};
export default UseEffectHooksInFunctionalCompo;