import React, { useEffect, useState } from 'react';
const UseEffectHooksInFunctionalCompo = () => {

    // useEffect(() => {
    //     console.log("called");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
    //         console.log(result);
    //     })

    // })

    // useEffect(() => { })
    // // empty dependancy START as constructor
    // useEffect(() => {
    //     console.log("called");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {

    //     })
    // }, [])
    // empty dependancy END as constructor

    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)


    // useEffect(() => {
    //     console.log("called");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
    //         console.log(result);
    //     })
    // },[refreshStatus])
    // useEffect(() => {
    //     console.log("called useEffect");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
    //         console.log(result);
    //     })
    //     return ()=> {
    //         console.log("called return");
    //     }
    // },[refreshStatus])


    useEffect(() => {
        console.log("called useEffect");
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);
        })
        return () => {
            console.log("called return");
        }

    }, [])
    return (
        <>
            UseEffectHooksInFunctionalCompo
            <button onClick={() => { setCnt(counter + 1) }}>Increment{counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>

            <div class="alert alert-warning">
                <h2>what is UseEffect hook?</h2>
                <p>The useEffect hook in React is used to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering</p>
            </div>

            <div class="alert alert-success">
                <h2>What is dependency in useEffect?</h2>
                <p>The dependency array in the useEffect hook is a powerful feature that controls when the effect should run. It is an array of values that the effect depends on. If one of these values changes between renders, React will re-run the effect. If the values have not changed, React will skip the effect.</p>

            </div>
            <div class="alert alert-warning">
                <h2>What is the benefit of useEffect?</h2>
                <p>useEffect is a built-in React Hook that allows developers to perform side effects, such as data fetching or updating the DOM, in functional components. It can replace lifecycle methods like componentDidMount , componentDidUpdate , and componentWillUnmount in class components.</p>

            </div>


        </>
    );

};
export default UseEffectHooksInFunctionalCompo;
