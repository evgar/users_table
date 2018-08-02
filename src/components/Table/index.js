import React, { Component } from "react"
import {connect} from "react-redux"
import TableHeader from "../TableHeader"
import TableBody from "../TableBody"
import "../../App.css"

class Table extends Component {
	render() {
		const { store } = this.props;
    const headers = Object.keys(Object.assign({}, ...store));

    return (
      <table className="table table-striped table-hover">
        <TableHeader headers={headers} />
        <TableBody data={store} />
      </table>
    )
	}
}

const mapStateToProps = (state) => (
	{ store: state }
);

export default connect(mapStateToProps)(Table)
