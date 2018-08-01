import React, {Component} from 'react'
import {connect} from 'react-redux'
import Table from './Table'
import ExportToJSON from './ExportToJSON'
import ExportToCSV from './ExportToCSV'
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
