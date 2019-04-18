import React, { Component } from 'react';
import '../Form.css';
import './Form7.css';
import Confirm from './Confirm'
import Search from './Search'

class Form7 extends Component {

    constructor(props) {
        super(props);
        this.homePath = (process.env.PUBLIC_URL === "") ? '/' : process.env.PUBLIC_URL;
      }

  render() {
    return (
      <div id="topicTemplate" className="template container gov-container form">

      <div id="breadcrumbContainer">
        <ol className="breadcrumb">

            <li>
                <a href={this.homePath}>Home</a>
            </li>
            <li>
                <a href="">Form 7</a>
            </li>
        </ol>
    </div>

      <div className="row">

        <div id="main-content" role="main" className="contentPageMainColumn col-sm-12">

            <div id="steps">
                <ol>
                    <li><span className="step-circle in-progress">1</span><span className="step-title-7 in-progress">Access</span></li>
                    <li><span className="step-circle future">2</span><span className="step-title-7 future">Form 7</span></li>
                    <li><span className="step-circle future">3</span><span className="step-title-7 future">Preview</span></li>
                    <li><span className="step-circle future">4</span><span className="step-title-7 future">Payment</span></li>
                </ol>
            </div>

            <div className="form-title">
                <h1>Notice of Appeal </h1>
                <label>Form 7 - Rule 11 (A)</label>
            </div>

            <Confirm />
            <Search />


        </div>


    </div>
    </div>
    );
  }
}

export default Form7;
