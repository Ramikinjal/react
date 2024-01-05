import React, { useState } from 'react';

const ControlledComponentInReact = () => {
    const [formData, setFormData] = useState({})
    const inpChangeEvent = (event) => { setFormData({ ...formData, [event.target.name]: event.target.value }) }

    return (
        <>
            <div class="alert alert-warning">
                <h2>Multiple Input in single State Component:-</h2>
                <p>Handling multiple inputs in a single state component in React involves managing the state of multiple form inputs within a single state object. This is useful when you have a form with various input fields, such as a registration or settings form. Each input field is associated with a specific piece of state in the component.</p>
            </div>
            <div class="alert alert-danger">


                <input type="text" placeholder='Fristname' onChange={inpChangeEvent} name="fname" id="fname" />  <br />
                <input type="text" placeholder='Lastname' onChange={inpChangeEvent} name="lname" id="lname" />  <br />
                <input type="text" placeholder='Email' onChange={inpChangeEvent} name="email" id="email" />  <br />
                <input type="text" placeholder='Mobile No' onChange={inpChangeEvent} name="mobile" id="mobile" /><br />
                <p>{JSON.stringify(formData)}</p>
            </div>
        </>
    );
};
export default ControlledComponentInReact;