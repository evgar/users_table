import React from "react"
import {connect} from "react-redux"
import TableHeader from "../TableHeader"
import TableBody from "../TableBody"
import "../App.css"

const Table = () => {
	return (
		<table className="table table-striped table-hover">
			<TableHeader/>
			<TableBody/>
		</table>
	)
}

export default connect(state => ({
	store: state
}))(Table)
