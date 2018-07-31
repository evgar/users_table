import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table';
import ExportToJSON from './ExportToJSON'
import ExportToCSV from './ExportToCSV'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render() {
	  return (
	  	<section className="table-responsive">
			<Table />
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
