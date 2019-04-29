import React from "react";
import moment from 'moment';
import MyInput from "./MyInput.js";
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import { Link } from "react-router";


class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        this.orderRow = this.orderRow.bind(this);
        this.searchResultRow = this.searchResultRow.bind(this);
        this.state = {
            showResult:true,
            searchResults: [
                {
                    styleOfCause:'TEST, One v TEST Two',
                    courtClass:'Supreme civil (General)',
                    orders:[
                        {
                            honorificTitle:'The Honourable',
                            judgeSurname:'Justice Bouk',
                            orderDate:new Date(),
                            appealSubmissionDeadline:new Date(),
                            isPastDeadline:false
                        }
                    ]
                }
            ]
        }
    }

    orderRow(order, index) {
        var judgementDay = moment(order.orderDate);
        var deadline = moment(order.appealSubmissionDeadline);
        var isPastDeadline = order.isPastDeadline;
        var rowClass = isPastDeadline ? "order-past-deadline" : "order-can-appeal";

        return(
            <tr key={index}>
                <td>{order.honorificTitle + " " + order.judgeSurname}</td>
                <td>{judgementDay.format('MMM D, YYYY')}</td>
                <td>{deadline.format('MMM D, YYYY h:mm A')}</td>
                <td><a href="#" id={'appeal-this-order-'+(index+1)}>Appeal this Order</a></td>
            </tr>
        );
    }

    searchResultRow(result, index) {

        var styleOfCause = result.styleOfCause;
        var courtClass = result.courtClass
        var orders = result.orders;

        return (
            <table key={index} >
                <thead>
                    <tr>
                        <th>Name of Judge</th>
                        <th>Date of Order</th>
                        <th>Deadline to File and Serve</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index)=>this.orderRow(order, index))
                    }
                </tbody>
            </table>
        )
    }

    render() {

        return(
            <div className="row">
                <div className="col-xs-12">
                    <h3>Case Results</h3>
                    <p>Below are the results of your search, please ensure you select the correct case using the style of proceeding (names of the parties) and the date of the order that you are appealing. <strong>Note</strong> that only one order can be appealed on a Notice of Appeal form.</p>

                    {
                        this.state.searchResults.map((result, index)=>
                            this.searchResultRow(result, index)
                        )
                    }
                </div>
            </div>
        )
	}
}

export default SearchResults;
