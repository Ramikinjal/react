import React from 'react';

const HooksInFunctionalCompo = () => {
    return (
        <>
            <div class="alert alert-success">
                <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                <p> This page describes the APIs for the built-in Hooks in React.</p>
                <p>If you’re new to Hooks, you might want to check out the overview first. You may also find useful information in the frequently asked questions section.</p>
            </div>
            <div class="alert alert-warning">
                <ul>
                    <li>
                        <p><a href="#basic-hooks">Basic Hooks</a></p>
                        <ul>
                            <li><a href="#usestate"><code className="gatsby-code-text">useState:-</code></a><span>useState is a React Hook that lets you add a state variable to your component.</span> </li>
                            <li><a href="#useeffect"><code className="gatsby-code-text">useEffect:-</code></a><span>useEffect is a React Hook that lets you synchronize a component with an external system.</span></li>
                            <li><a href="#uselayouteffect"><code className="gatsby-code-text">useLayoutEffect:-</code></a><span>
                                useLayoutEffect is a React Hook that allows you to perform synchronous actions on the DOM immediately after all DOM mutations. It is often used for tasks like measurements or mutations that require accurate and up-to-date information about the DOM layout.</span></li>
                            <li><a href="#useref"><code className="gatsby-code-text">useRef:-</code></a><span>useRef is a React Hook that returns a mutable object called a "ref" object, which has a current property. </span></li>
                        </ul>
                    </li>
                    <li>
                        <p><a href="#additional-hooks">Additional Hooks</a></p>
                        <ul>
                            <li><a href="#usecallback"><code className="gatsby-code-text">useCallback:-</code></a><span>'useCallback' is a React Hook used to memoize and memoize functions, preventing unnecessary re-creation of functions on each render. It's particularly useful in optimizing performance for components that rely on stable callback functions.</span></li>
                            <li><a href="#usememo"><code className="gatsby-code-text">useMemo:-</code></a><span>'useMemo' is a React Hook used to memoize the result of a computation, preventing unnecessary recalculations during re-renders. It is useful for optimizing performance by caching the result of expensive operations and only recomputing when dependencies change.</span></li>
                            <li><a href="#useimperativehandle"><code className="gatsby-code-text">useImperativeHandle</code></a></li>
                            <li><a href="#usedebugvalue"><code className="gatsby-code-text">useDebugValue</code></a></li>
                            <li><a href="#usedeferredvalue"><code className="gatsby-code-text">useDeferredValue</code></a></li>
                            <li><a href="#usetransition"><code className="gatsby-code-text">useTransition</code></a></li>
                            <li><a href="#useid"><code className="gatsby-code-text">useId</code></a></li>
                            <li><a href="#usecontext"><code className="gatsby-code-text">useContext</code></a></li>
                            <li><a href="#usereducer"><code className="gatsby-code-text">useReducer</code></a></li>
                        </ul>
                    </li>
                    <li>
                        <p><a href="#library">Library Hooks</a></p>
                        <ul>
                            <li><a href="#usesyncexternalstore"><code className="gatsby-code-text">useSyncExternalStore</code></a></li>
                            <li><a href="#useinsertioneffect"><code className="gatsby-code-text">useInsertionEffect</code></a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default HooksInFunctionalCompo;