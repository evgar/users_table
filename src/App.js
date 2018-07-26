import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './Table';


class App extends Component {
  render() {
	  return (
      <Table className="table" />
    );
  }
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(App);
