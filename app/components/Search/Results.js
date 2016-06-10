var React = require('react');

var Results = React.createClass({
	getInitialState: function(){
		console.log(this.props.results);
		return{
			title: "",
			date: "",
			url: ""
		}
	},
	render: function(){
		return(
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title">Results</h1>
						</div>
						<div className="panel-body">
						</div>
					</div>

				</div>
			</div>
		)
	}
});

module.exports = Results;