import React from 'react';
import MyInput from './MyInput'

class TrialDuration extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <label className="control-label">Duration of trial/hearing</label>
                <MyInput type="text" name="trialDurationDays" style={{width:50}} />
                <span>Days</span>
            </div>
        )
    }
}

export default TrialDuration
