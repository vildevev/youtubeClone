// React = is a js library, used to make html that is shown to a user in the web browser
// Components = snippets of code that produses html
// make multiple components, nests them
// have to explicitly import modules fo each individual file
import React from 'react';
import ReactDOM from 'react-dom';
// 1. Create component
// 2. Take the component, put it on the page (in the DOM)

// const = declaring a variable that's immutable
// a 'factory' that creates instances of components, a class
// with arrow functions, the value of 'this' is different
const App = () => {
	// returns jsx = subset of js, looks like html
	return <div>Hi!</div>;
};

// passing an instance of the class to the render function
// second argument is a reference to a specific DOM-element on the page
ReactDOM.render(<App />, document.querySelector('.container'));
