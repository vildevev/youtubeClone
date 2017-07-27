// pull off property component as a variable component
import React, { Component } from 'react';

// functional component = function we can call that just returns some jsx
// class component is for when we want to have internal record keeping
// give access to all functionality from React.Component class
class SearchBar extends Component {
	// must have render method
	render() {
		// must return jsx
		return <input />;
	}
}

export default SearchBar;
