var React = require('react');

var Saved = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title">Saved Articles</h1>
						</div>
						<div className="panel-body">
							<p>Saved Articles will go here.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Saved;