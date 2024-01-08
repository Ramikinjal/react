import React, { useRef, useState } from 'react';

const UseRefEffectHooksInFunctionalCompo = () => {
    const [data, anything] = useState(null)
    const focusPoint = useRef(null)
    const onClickHandler = (event) => {
        // console.log(focusPoint);
        console.log(event);
        console.log(event.target);
        // console.log(focusPoint.current);
        // console.log(focusPoint.current.value);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();

    }
    return (
        <>

            <div class="alert alert-warning">
                <h2>What is the useRef hook and how is it used?</h2>
                <p>The useRef hook creates and manages mutable references to values. This can be useful for storing non-reactive data, such as a DOM element or a subscription.</p>
            </div>
            <div>
                <h2>what is UseRef in react?</h2>
                <p>hook returns a mutable ref object which can hold a value in its .current property. This hook is used to access the DOM nodes or values that persist between the renders.</p>
            </div>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
            <textarea onChange={(event) => {
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                // anything("test")
                anything(event.target.value)
            }} />
            {data}
        </>
    )
}

export default UseRefEffectHooksInFunctionalCompo;