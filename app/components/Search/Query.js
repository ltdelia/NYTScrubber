var React = require('react');

var Query = React.createClass({
	getInitialState: function(){
		return{
			topic: "",
			start: "",
			end: ""
		}
	},
	handleChange: function(event){
		var currentState = {};
		currentState[event.target.id] = event.target.value;
		this.setState(currentState);
	},
	handleSubmit: function(){
		console.log("Button Clicked");
		this.props.updateSearch(this.state.topic, this.state.start, this.state.end);
		return false;
	},
	render: function(){
		return(
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title">Query</h1>
						</div>
						<div className="panel-body">

							<form>
								<div className="form-group">
									<h4>Topic</h4>
									<input type="text" className="form-control" id="topic" value={this.state.value} onChange={this.handleChange} required />
									<h4>Start Year</h4>
									<input type="number" className="form-control" id="start" value={this.state.value} onChange={this.handleChange} required />									
									<h4>End Year</h4>
									<input type="number" className="form-control" id="end" value={this.state.value} onChange={this.handleChange} required />
								</div>
								<div className="pull-right">
									<button type="button" className="btn btn-danger" onClick={this.handleSubmit}>
										<h4>Submit</h4>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Query;