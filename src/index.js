// React = is a js library, used to make html that is shown to a user in the web browser
// Components = snippets of code that produses html
// make multiple components, nests them
// have to explicitly import modules fo each individual file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// must provide path for files me make ourselves, not for packages
import SearchBar from './components/search_bar';
// 1. Create component
// 2. Take the component, put it on the page (in the DOM)
const API_KEY = 'AIzaSyDOVi6sO3R6XWBD0CxjXUQO1sgZjhOHFIA';

// const = declaring a variable that's immutable
// a 'factory' that creates instances of components, a class
// with arrow functions, the value of 'this' is different
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		// key and property same variable name
		YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
			this.setState({ videos });
		});
	}
	render() {
		// returns jsx = subset of js, looks like html
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// passing an instance of the class to the render function
// second argument is a reference to a specific DOM-element on the page
ReactDOM.render(<App />, document.querySelector('.container'));

// Downwards dataflow, only most parent component should be responsible for fetching data.
// Index component is the top level one
