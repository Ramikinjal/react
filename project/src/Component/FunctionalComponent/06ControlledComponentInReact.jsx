import React, { useState } from 'react';


const ControlledComponentInReact = () => {
    const [data, anything] = useState("default")
    const [state2, setState] = useState("default")
    let varaible_data = "default"
    // const inpChangeEvent = (kaipan)=>{
    // console.log("called",kaipan);

    const inpChangeEvent = (event) => {
        // console.log("called", event);
        // console.log("called", this);
        // console.log("called", event.target);
        // console.log("called", event.target.value);
        varaible_data = event.target.value
        anything(event.target.value)
        //return
    }
    return (
        <>

            <div class="alert alert-warning">
                <h2>Control component</h2>
                <p>A controlled component in React is a component whose state is controlled by React. In other words, the values of form elements like input fields are controlled by the React state. When the state changes, the UI updates accordingly.</p>
                <p>Onshort by:Controlled components in React are those in which form data is handled by the component’s state.</p>
                <br />
                <br />
                <img width="500px" src="https://www.scaler.com/topics/images/flow-of-controlled-component.webp" alt="" />

                <br />
                <h2>USed for Control component:-</h2>
                <p>Forms are used to store information in a document section. The information from this form is typically sent to a server to perform an action. This data is held by form input elements and control elements, such as input, select, textarea, etc., which maintain and control their states or values.</p>
                <br />
                <h2>What do I mean by that?</h2>
                <p>Each form element contains a value. The value may be typed (input, textarea) or selected (checkbox, select, radiobutton, etc) by the user or browser. When the element’s value is changed (triggered by the act of typing or selecting), it is updated accordingly.</p>

            </div>
            {/* <input type="text" onChange={inpChangeEvent()} name="" id="" />
            <input type="text" onChange={inpChangeEvent(this)} name="" id="" /> */}
            <input type="text" onChange={inpChangeEvent} name="" id="" />
            <input type="text" onChange={(event) => setState(event.target.value)} name="" id="" />
            <p>{varaible_data}</p>
            <p>{data}</p>
            <p>{state2}</p>
        </>
    );
};

export default ControlledComponentInReact;  