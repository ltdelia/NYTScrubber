var React = require('react');	

var Search = require('./Search.js');
var Saved = require('./Saved');

var Main = React.createClass({
	render: function(){
		return(
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="/">NYT Search</a>
						</div>
						<div className="pull-right">
							<a className="navbar-brand" href="#/search">Search</a>
							<a className="navbar-brand" href="#/saved">Saved Articles</a>							
						</div>
					</div>
				</nav>
				<div className="jumbotron">
					<div className="container">
						<h1 className="text-center">New York Times Search</h1>
						<p className="text-center">Search for and save articles of interest.</p>
					</div>
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>

		)
	}
});

module.exports = Main;