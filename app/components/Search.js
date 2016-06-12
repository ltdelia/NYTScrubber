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

		if(this.state.topic != "" && (prevState.topic != this.state.topic || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)){

			helpers.getArticlesByQuery(this.state.topic, this.state.startYear, this.state.endYear)
				.then(function(data){
					console.log("Response from NYT: ", data);
					if(data != this.state.results){
						this.setState({
							results: data
						})
					}
				}.bind(this))

		}
	},	
	setQuery: function(newTopic, newStart, newEnd){
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
				<Results results={this.state.results}/>
			</div>
		)
	}
});

module.exports = Search;