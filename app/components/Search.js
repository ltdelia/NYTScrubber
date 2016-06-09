var React = require('react');

var Query = require('./Search/Query');
var Results = require('./Search/Results');

var helpers = require('../utils/helpers');

var Search = React.createClass({
	getInitialState: function(){
		return{
			topic: "",
			startYear: "",
			endYear: "",
			results: []
		}
	},
	componentDidUpdate: function(prevProps, prevState){
		console.log("Topic: ", this.state.topic);
		console.log("Start Year: ", this.state.startYear);
		console.log("End Year: ", this.state.endYear);

		console.log("Previous State: ", prevState);
		console.log("Previous Props: ", prevProps);
	},	
	setQuery: function(newTopic, newStart, newEnd){
		console.log("TESTING OUR SETQUERY FUNCTION");
		this.setState({
			topic: newTopic,
			startYear: newStart,
			endYear: newEnd
		});
	},
	render: function(){
		console.log("Render Results", this.state.results)
		return(
			<div className="main-container">
				<Query updateSearch={this.setQuery}/>
				<Results results={this.state.results} />
			</div>
		)
	}
});

module.exports = Search;