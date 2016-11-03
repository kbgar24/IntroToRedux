import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
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


		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});	// when key & value are same variable name: { videos: videos }

		})
	}

	render() {
		return (
			<div className="main-text">
				<h5>YouTube Clone</h5>
				<SearchBar />
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