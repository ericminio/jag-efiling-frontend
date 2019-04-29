import React from 'react';

class SearchResultsReminder extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data:props.data }
    }

    render() {
        return (
        <div>
            <div>
                Information on this form has been pre-filled with data from the selected order and account information on file.<br/>
                Review the information on the form for accuracy and fill in anything that may be missing
                <br />
            </div>

            <div className="row">
                <div className="col-sm-4 col-xs-7">
                    <div className="form-group">
                        <p className="form-control-static">Supreme Court Of BC</p>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-5">
                    <div className="form-group">
                        <p className="form-control-static">{ this.state.data.fileNumber }</p>
                    </div>
                </div>
                <div className="col-sm-5 col-xs-12">
                    <div className="form-group">
                        <p className="form-control-static">Victoria Law Court</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <label className="control-label">Name of Judge</label>
                <p className="form-control-static">The Honourable Justice Bouk</p>
            </div>
            <div className="row">
                <label className="control-label">Date Of Order</label>
                <p className="form-control-static">{ ''+new Date() }</p>
                <p className="help-text help-text--dateOfJudgment">Please ensure that you review the date of the order noted above to confirm that it is accurate.  Should you find the date above is wrong, please contact the<a target="_blank" href="https://www2.gov.bc.ca/gov/content/justice/courthouse-services/courthouse-locations?keyword=courthouse%26keyword=locations"> court registry.</a></p>
            </div>
        </div>
        )
    }
}

export default SearchResultsReminder
