import React from 'react';
import MyInput from './MyInput'
import SearchResults from './SearchResults'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            levelOfCourtOptions: [
                {value:"S",label:"Supreme Court of BC"}
            ],
            lowerCourtRegistryOptions: [
                {value:"v",label:"Victoria Law Court"}
            ],
        }
    }

    render() {
        return (
        <div className="form-section">
            <h2>Lower Court Case Information</h2>
            <p>Find the Supreme Court case you are appealing by entering the following information about the case.</p>

            <div className="row">
                <div className="col-xs-6 col-sm-4">
                    <div className="form-group">
                        <label className="control-label">Level of Court</label>
                        <MyInput type="select" name="lowerCourtLevelCd"
                            selectOptions={this.state.levelOfCourtOptions} isPrefilled={false}
                            labelField="lowerCourtLevelName" disabled={true} />
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="form-group">
                        <label className="control-label">Supreme Court File No.</label>
                        <MyInput id="court-file-no" type="text" maxLength={25} name="lowerCourtFileNo" isPrefilled={false}
                            isValid={true} />
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="form-group">
                        <label className="control-label">Supreme Court Registry</label>
                        <MyInput type="select" name="lowerCourtRegistryId"
                            selectOptions={this.state.lowerCourtRegistryOptions} isPrefilled={false}
                            labelField="lowerCourtRegistryName"
                            isValid={true}
                            ref="lowerCourtRegistryId" />
                    </div>
                </div>
                <div className="col-xs-6 col-sm-2">
                    <div className="form-group">
                        <label className="control-label">&nbsp;</label>
                        <button id="find-button" className="btn btn-primary load_data form-control btn-green">Find</button>
                    </div>
                </div>
            </div>

            <hr />
            <SearchResults />
        </div>
        )
    }
}

export default Search
