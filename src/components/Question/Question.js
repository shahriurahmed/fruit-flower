import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div >
            <h2 id='questions'>
                Questions
            </h2>
            <div className='questions'>
                <h3 id='question'>How does react works?</h3>
                <p id='answer'>React is a JavaScript library (not a framework) that uses declarative code to build user interfaces (UIs) that are predictable and efficient. It may be used to create single-page apps and mobile apps, as well as more complicated apps if combined with other libraries. It creates basic views for each state in your project, and when your data changes, React updates and renders the appropriate component quickly. React reads these objects and uses them to build HTML elements on the virtual DOM before synchronizing with the real DOM. As a result, we'll have object trees on the virtual DOM and object trees on the real DOM. When we alter data on a React element, React immediately updates the accompanying DOM element.</p>
                <hr id='divider'></hr>
                <h3 id='question'>How does useState works?</h3>
                <p id='answer'>
                    useState is a Hook (function) that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value (not necessarily the starting state) and another function to update it. In function components, the useState hook lets us to declare one or more state variables. React keeps track of these state variables in the background and guarantees that they are updated on successive re-renders of the component.
                    Pass the initial value as an argument to the useState function if you wish to set an initial value for the variable. UseState will return the two-element array as usual when React first runs your component, but it will assign the initial value to the first element of the array.
                </p>

            </div>


        </div>
    );
};

export default Question;