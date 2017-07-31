// React = is a js library, used to make html that is shown to a user in the web browser
// Components = snippets of code that produses html
// make multiple components, nests them
// have to explicitly import modules fo each individual file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// must provide path for files me make ourselves, not for packages
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// 1. Create component
// 2. Take the component, put it on the page (in the DOM)

// const = declaring a variable that's immutable
// a 'factory' that creates instances of components, a class
// with arrow functions, the value of 'this' is different
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

	videoSearch(term) {
		// key and property same variable name
		YTSearch({ key: 'NONE_OF_YOUR_GODDAMN_BUSINESS', term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		// debounce makes new function that can only be called every 300 miliseconds
		const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
		// returns jsx = subset of js, looks like html
		// passing data from parent to child component = props
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

// passing an instance of the class to the render function
// second argument is a reference to a specific DOM-element on the page
ReactDOM.render(<App />, document.querySelector('.container'));

// Downwards dataflow, only most parent component should be responsible for fetching data.
// Index component is the top level one
