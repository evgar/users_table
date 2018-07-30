import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './Table';
import ExportToJSON from './ExportToJSON'
import ExportToCSV from './ExportToCSV'


class App extends Component {
  render() {
	  return (
	  	<section>
			<Table className="table" />
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
