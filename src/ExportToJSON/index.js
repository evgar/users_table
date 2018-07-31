import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class ExportToJSON extends Component {
	constructor(props) {
		super(props)

		this.toJSON = JSON.stringify(this.props.store)
	}

	render() {
		console.log(this.toJSON);
		return <button className="export-btn btn light-blue lighten-2">
				<a
					href={`data:text/json;charset=utf-8, ${this.toJSON}`}
				   	download="candidates.json"
					className="white-text"
				>
					Download JSON
				</a>
			</button>
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(ExportToJSON);