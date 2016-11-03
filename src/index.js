import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAR2_R4GUYP4fdz0NzPNkcpU47tmo8QGEg';


//Object-oriented style, with state
class App extends React.Component {
	
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});	
		});
	} 

	render() {

		//debounce - grouping suddent burst of events (keystrokes) into one event
		//throttle - continuous execution every so many ms
		//requestAnimcationFrame - throttle alternative. Smooth changes & animations.  

		const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300 )


		return (
			<div className="main-text">
				<h5>YouTube Clone</h5>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				/>
			</div>
		)	
	}
}

//Create a new component. This component should product HTML

//Functional Style
// const App = () => {
// 	return (
// 		<div className="main-text">
// 			<h5>Hello World!</h5>
// 			<SearchBar />
// 		</div>
// 	)		
// }



//Take generated HTML && insert into DOM

//

ReactDom.render(<App />, document.querySelector('.container')); 


//always one component per pile