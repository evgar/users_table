import React, {Component} from 'react'
import {connect} from 'react-redux'
import Table from './components/Table'
import ExportToJSON from './components/ExportToJSON'
import ExportToCSV from './components/ExportToCSV'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'


const App = () => {
	return (
		<section className="table-responsive">
			<Table/>
			<ExportToJSON/>
			<ExportToCSV/>
		</section>
	)
}

const mapStateToProps = (state) => (
	{ store: state }
)

export default connect(
	mapStateToProps
)(App)
