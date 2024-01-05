import React from 'react';

const RestVsSpreadComponentInReact = () => {
    const sum = (x, y, z) => {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));
    return (
        <>
            <p> The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.</p>
            <p> Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.  </p>
            <div className="alert alert-info p-3">
                const sum = (x, y, z) =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   return x + y + z; <br />
                &#125; <br />
                const numbers = [1, 2, 3]; <br />
                console.log(sum(...numbers)); <br />
            </div>

            <div className="alert alert-info p-3">
                function myFunction(x, y, z) &#123;  &#125;<br />
                const args = [0, 1, 2];  <br />
                myFunction.apply(null, args);  <br />
            </div>
            <div class="alert alert-warning">
                <h2>Spread Operator in React Components:</h2>
                <p>The spread operator (...) in JavaScript is commonly used in React to create shallow copies of objects or arrays. In the context of React components, it's often used to spread the properties of an object, making it easier to work with state or props.</p>
                <br />
                <br />
                <h3>Example</h3>
                const MyComponent = (props) => &gt; <br />
                const newProps = &gt;...props, additionalProp: 'someValue' &lt; <br />
                // Rest of the component logic...<br />
                &lt;;

            </div>

            <h3>Rest</h3>
            <div className="alert alert-info p-3">
                function myFunction(v, w, x, y, z)  &#123;  &#125;<br />
                const args = [0, 1];
                myFunction(-1, ...args, 2, ...[3]);
                const parts = ["shoulders", "knees"];
                const lyrics = ["head", ...parts, "and", "toes"];
                //  ["head", "shoulders", "knees", "and", "toes"]


                const sum = (x, ...y) =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   return x + y + z; <br />
                &#125; <br />

                console.log(sum(12,45,98,654)); <br />
            </div>
            <div class="alert alert-warning">
                <h2>Rest Operator in React Components:</h2>
                <p>The rest operator (...) in the context of function parameters is used to collect all remaining parameters into a single array. This is often used in conjunction with destructuring to handle multiple props or state variables.</p>
                <br />
                <br />
                <h3>Example</h3>
                const MyComponent = (&gt; prop1, prop2, ...restProps &lt;) => &gt;
                // prop1 and prop2 are individual props, and restProps is an object containing the remaining props
                // Rest of the component logic...
                &lt;

            </div>

            <div>
                <img width="500px" src="https://i.redd.it/erej5eai49o91.jpg" alt="" />
            </div>

        </>
    );
};
export default RestVsSpreadComponentInReact;