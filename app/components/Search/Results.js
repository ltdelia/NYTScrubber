var React = require('react');

var Results = React.createClass({
	getInitialState: function(){
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
							{this.props.results.map(function(result, index){

								return(
										<li className="list-group-item" key={index}>
											{result.headline.main && <h2>{result.headline.main}</h2>}
											{result.pub_date && <p>{result.pub_date}</p>}
											{result.web_url && <a type="button" href={result.web_url} target="_blank" className="btn btn-primary">View Article</a>}
											<a type="button" className="btn btn-warning">Save</a>
										</li>
								)
							})}
						</div>
					</div>

				</div>
			</div>
		)
	}
});

module.exports = Results;