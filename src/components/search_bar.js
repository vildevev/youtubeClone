// pull off property component as a variable component
import React, { Component } from 'react';

// functional component = function we can call that just returns some jsx
// class component is for when we want to have internal record keeping
// give access to all functionality from React.Component class
class SearchBar extends Component {
	// state = plain javascript object that is used to record and react to user events. Each classbased component has its own state.
	// whenever state changes, component rerenders, all children rerender as well
	// Initialize state in constructor object
	// constructor is called automatically whenever we create new instance
	constructor(props) {
		// calling parent method with super
		super(props);
		// for initializing variables and state
		// object we pass has properties we want to record change on
		this.state = { term: '' };
	}
	// must have render method
	render() {
		// must return jsx
		// handle regular browser events by writing 'on#{nameOfEvent}={this.#{nameOfEventHandler}}'
		// 'onChange' is a prop (property)
		// define event handler right here instead
		return (
			//only manipulate state with 'this.setState', else React won't know that we're changing the state
			// when we tell input that value is provided by 'this.state.term' // we
			// turn it into a controlled component. A controlled component has it's
			// valueset by state. Only changes when state changes // grab value from
			// the state
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}
	// event handler:
	// have to pass it the event we would like to monitor
	// onInputChange(event) {
	// describes the context or information about the event that occurs
	// console.log(event.target.value);
	// }
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
