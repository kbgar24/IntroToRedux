import React from 'react';


//class style
class SearchBar extends React.Component {

	//state is a plain JS object used to record & react to user events
	//changes in state re-render component & it's children;
	//state must be initialized

	constructor(props) {
		// super references parent class to React.Component. extend proptotype with props;
		super(props);
		this.state = { term: '' };


	}

	onInputChange(term) {
		this.setState({term})
		this.props.onSearchTermChange(term);
	}
 

	
	render() {
		
		let term = this.state.term;

		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>

				<a
					className="search-bar-btn"
					href="#"
					onClick={this.props.onSearchTermChange(this.state.term)}
				>
						<span>
							<i className="fa fa-search" aria-hidden="true"></i>
						</span>
				</a>

			</div>
		)
	}


}


//functional style 
// const SearchBar = () => {
// 	return <input placeholder="Search" autofocus/>;
// };


//start with functional, use class with state;



export default SearchBar;