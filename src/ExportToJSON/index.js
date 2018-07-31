import React, { Component } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import "../App.css";

class ExportToJSON extends Component {

	render() {
		const toJSON = JSON.stringify(this.props.store)
		return 	<Button style={{margin: '10px'}}>
					<a href={`data:text/json;charset=utf-8, ${toJSON}`} download="candidates.json">EXPORT TO JSON</a>
				</Button>
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(ExportToJSON);