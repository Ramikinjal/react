import React from 'react';

const JSXFunctionalComponentInReact = () => {
    var test = "checking"
    return (
        <>
            <div class="alert alert-success">
                <h2>.JavaScript XML (JSX):-</h2>
                <p>It's a syntax extension for JavaScript that looks similar to XML or HTML.</p>
                <p>avaScript XML, is a syntax extension for JavaScript often used with React. It provides a more concise and readable way to write React components. In the context of functional components, JSX allows you to describe the structure of your user interface using a syntax that looks similar to HTML or XML.</p>
                <h2>Functional Components:- </h2>
                <p>These are a type of component in React that are defined as JavaScript functions. They take in props as parameters and return JSX to describe the UI.</p>
                <br />
                <br />
                <code>import React from 'react';<br />
                    import ReactDOM from 'react-dom/client';<br />

                    const myElement = React.createElement('h1', { }, 'I do not use JSX!');<br />

                    const root = ReactDOM.createRoot(document.getElementById('root'));<br />
                    root.render(myElement);</code>

            </div>
            <div class="alert alert-warning">
                100+100={100 + 100}
                <p>test variable data : {test}</p>
                <p> React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.</p>
                <p> Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.</p>
                <p> React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>
            </div>
        </>
    );
};

export default JSXFunctionalComponentInReact;   