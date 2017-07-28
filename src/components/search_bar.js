// pull off property component as a variable component
import React, { Component } from 'react';

// functional component = function we can call that just returns some jsx
// class component is for when we want to have internal record keeping
// give access to all functionality from React.Component class
class SearchBar extends Component {
	// must have render method
	render() {
		// must return jsx
		// handle regular browser events by writing 'on#{nameOfEvent}={this.#{nameOfEventHandler}}'
		// 'onChange' is a prop (property)
		// define event handler right here instead
		return <input onChange={event => console.log(event.taget.value)} />;
	}
	// event handler:
	// have to pass it the event we would like to monitor
	// onInputChange(event) {
	// describes the context or information about the event that occurs
	// console.log(event.target.value);
	// }
}

export default SearchBar;
