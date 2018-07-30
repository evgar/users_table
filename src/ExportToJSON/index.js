import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class ExportToJSON extends Component {

	render() {
		const toJSON = JSON.stringify(this.props.store)
		return <button>
				<a href={`data:text/json;charset=utf-8, ${toJSON}`} download="candidates.json">Download JSON</a>
			</button>
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(ExportToJSON);