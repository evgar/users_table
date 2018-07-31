import React, {Component} from "react"
import {connect} from "react-redux"
import TableCell from "../TableCell"
import MaterialTableRow from '@material-ui/core/TableRow'
import MaterialTableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button';
import "../App.css";

const styles = {
	buttonCell: {
		textAlign: 'center'
	},
	tableButton: {
		margin: '5px',
		minWidth: '90px'
	},
	counterCell: {
		textAlign: 'center'
	}
}
class TableRow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			user: this.props.user
		};

		this.updateUserData = this.updateUserData.bind(this);
		this.cancelEdition = this.cancelEdition.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	changeEditMode() {
		this.setState(prevState => ({editMode: !prevState.editMode}));
	}

	editItem() {
		this.props.onEditItem(this.state.user, this.props.id);
	}

	updateUserData(info) {
		const preparedInfo = {[info.title]: info.meaning};
		this.setState({user: {...this.state.user, ...preparedInfo}});
	}

	cancelEdition() {
		const unchangedData = this.props.store[this.props.id];
		this.setState({user: unchangedData});
		this.changeEditMode();
	}

	deleteItem() {
		this.props.onDeleteItem(this.props.id);
	}

	render() {
		const {editMode, user} = this.state;
		const {id} = this.props;
		return (
			<MaterialTableRow key={this.props.store[id].candidateName} hover>
				<MaterialTableCell style={styles.counterCell}>{this.props.id + 1}</MaterialTableCell>
				{Object.entries(user)
					.map(user => ({title: user[0], meaning: user[1]}))
					.map(characteristic => {
						return (
							<TableCell
								key={characteristic.title}
								value={characteristic}
								editMode={editMode}
								onValueChange={this.updateUserData}
							/>
						);
					})}
				<MaterialTableCell style={styles.buttonCell}>
					{!editMode ?
						[
							<Button
								key="edit"
								onClick={() => {
									this.changeEditMode();
								}}
								color="primary"
								style={styles.tableButton}
								variant="contained"
							>
								Edit
							</Button>,
							<Button key="delete"
									onClick={this.deleteItem}
									color="secondary"
									variant="contained"
									style={styles.tableButton}
							>
								Delete
							</Button>
						]
						:
						[
							<Button
								key="save"
								onClick={() => {
									this.changeEditMode();
									this.editItem();
								}}
								color="primary"
								style={styles.tableButton}
								variant="contained"
							>
								Save
							</Button>,
							<Button key="cancel"
									onClick={this.cancelEdition}
									color="secondary"
									variant="contained"
									style={styles.tableButton}
							>
								Cancel
							</Button>
						]}
				</MaterialTableCell>
			</MaterialTableRow>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onEditItem: (user, id) => {
			dispatch({type: "EDIT_ITEM", user, id});
		},
		onDeleteItem: id => {
			dispatch({type: "DELETE_ITEM", id});
		}
	})
)(TableRow);
