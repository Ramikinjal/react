import React, { Component } from 'react';
class ClassComponentInReact extends Component {
    otherfunction() {
        return <>otherfunction</>
    }
    otherfunction1() {
        return <>otherfunction 1</>
    }
    otherfunction2() {
        return <>otherfunction 2</>
    }
    render() {
        return (
            <>
                <div class="alert alert-warning">
                    <h2>Class-Component:-</h2>
                    <p>The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to another class component. We can use JavaScript ES6 classes to create class-based components in React. The below example shows a valid class-based component in React: </p>

                </div>
                <div>
                    <p class="bg-info	">in ReactJs we can create Component using class that will considered as class compo</p>
                    <p>class compo have render method for return.</p>
                    {this.otherfunction2()}
                    <img src="https://miro.medium.com/v2/resize:fit:1170/1*mgLCai47P4NLLYKogIFAIg.jpeg" alt="" />
                </div>
            </>
        );
    }
}
export default ClassComponentInReact;