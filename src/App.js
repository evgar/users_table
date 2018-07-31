import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table';
import ExportToJSON from './ExportToJSON'
import ExportToCSV from './ExportToCSV'
import './App.css';


class App extends Component {
  render() {
	  return (
			<section>
				<Table/>
					<ExportToJSON />
					<ExportToCSV />
			</section>
    );
  }
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(App);
