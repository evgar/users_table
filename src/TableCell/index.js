import React, { Component } from "react"
import MaterialTableCell from '@material-ui/core/TableCell'
import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
import "../App.css";

class TableCell extends Component {
	constructor(props) {
		super(props);

		this.state = props.value;

		this.changeValue = this.changeValue.bind(this);
	}

	changeValue(e) {
		const { value } = e.target;
		this.setState({ meaning: value }, () => {
			this.props.onValueChange(this.state)
		});
	}

	render() {
		const { editMode } = this.props;
		const { meaning } = this.state;
		return (
			<MaterialTableCell>
				<input
					// type="text"
					value={meaning}
					disabled={!editMode}
					onChange={this.changeValue}
					className="form-control table-cell-input"
				/>
			</MaterialTableCell>
		);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value.meaning !== this.props.value.meaning) {
			this.setState({ meaning: this.props.value.meaning });
		}
	}
}

export default TableCell
