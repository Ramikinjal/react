import React, { useState } from 'react';
const StateFunctionalComponentInReact = () => {
    let data = "somthing"

    const [statedata, anything] = useState("default");
    const [state, setState] = useState(true);


    const [birthdate, setcount] = useState(16 + 5 + 2002);

    function update() {
        // console.log("update");
        setcount(birthdate);

    }
    return (
        <>
            <div class="alert alert-success">
                <h1>Kinjal Rami</h1>
                <h2>{birthdate}</h2>
                <br />
                <h2><u>State</u>:-</h2>
                <p>state is a way to manage and store data within a component. Traditionally, functional components were stateless, meaning they couldn't manage or hold internal state. However, with the introduction of React Hooks, specifically the useState hook, functional components can now have state.</p>

            </div>

            <div class="alert alert-warning">
                {data}
                <br />
                <button onClick={() => { data = "checking" }}>Click simple variable</button> <br />
                <br />
                <button onClick={() => { anything("updated data") }}>update state</button>
                <p>State data: {statedata} </p>
                <button onClick={() => { setState(!state) }}>Toggle{JSON.stringify(state)}</button>


                <p>Before React version 16.8,developer could handle state and other React features only using class components. But with version 16.8, React introduced a new pattern called Hooks.</p>

                <p> What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.</p>
                <p> What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)</p>
                <p> What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.</p>

            </div>
        </>
    );

};
export default StateFunctionalComponentInReact;