import React from "react";
import { connect } from "react-redux";
import "../../App.css";

const ExportToJSON = props => {
	const toJSON = JSON.stringify(props.store, null, "\t");
	return (
		<button className="export-btn btn light-blue lighten-2">
			<a 	href={`data:text/json;charset=utf-8, ${toJSON}`}
				download="export.json"
				className="white-text"
			>
				Download JSON
			</a>
		</button>
	);
};

export default connect(
	state => ({
		store: state
	})
)(ExportToJSON);
