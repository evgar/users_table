import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './Table';
import ExportToJSON from './ExportToJSON'
import ExportToCSV from './ExportToCSV'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
