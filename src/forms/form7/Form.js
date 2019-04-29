import React from 'react';
import MyInput from './MyInput'
import { RadioGroup, Radio } from "react-radio-group";
import SearchResultsReminder from './SearchResultsReminder'
import TrialDuration from './TrialDuration'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data:props.data }
    }

    render() {
        return (
        <div className="form-section">
            <h2>Form Details</h2>
            <SearchResultsReminder data={ this.state.data }/>
            <TrialDuration />

            <div className="row">
                <p className="form-control-static"><strong>Please complete the following fields:</strong></p>
                <h2 className="form-heading-section--large">Type Of Order</h2>
                <RadioGroup >
                    <div>
                        <label className="radio-inline"><Radio  />Trial Judgment</label>
                        <label className="radio-inline"><Radio  />Summary Trial Judgment</label>
                        <label className="radio-inline"><Radio  />Chamber Judgment</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="row">
                <p><strong>Was this matter already appealed in Supreme Court?</strong></p>
                <p>From a <strong>Provincial Court Judge</strong> to a Supreme Court Judge - <a target="_blank"  href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/17_168_2009%20-%20Supreme%20Court%20Civil%20Rules/168_2009_02.xml#rule18-3">Supreme Court Civil Rules 18-3</a></p>
                <p>From a <strong>Master, Registrar or Special Referee</strong> to Supreme Court Judge - <a target="_blank"  href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/17_168_2009%20-%20Supreme%20Court%20Civil%20Rules/168_2009_03.xml#subrule_d2e32458">Supreme Civil Court Rules 23-6(8)</a></p>
                <p>From a <strong>Tribunal</strong> to a Supreme Court Judge - <a target="_blank"  href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/17_168_2009%20-%20Supreme%20Court%20Civil%20Rules/168_2009_02.xml#rule18-3">Supreme Court Civil Rules 18-3</a></p>
                <RadioGroup >
                    <div>
                        <label className="radio-inline"><Radio value={true} />Yes</label>
                        <label className="radio-inline"><Radio value={false} />Not Applicable</label>
                    </div>
                </RadioGroup>
            </div>
            <hr/>
            <div className="row">
                <h2 className="form-heading-section--large">Nature of the Appeal</h2>
                <p>Which of the following best describes what this appeal involves?</p>
                <RadioGroup >
                    <div className="row">
                        <label className="col-sm-3"><Radio />Constitutional / Administrative</label>
                        <label className="col-sm-3"><Radio />Civil Procedure</label>
                        <label className="col-sm-3"><Radio />Commercial</label>
                    </div>
                    <div className="row">
                        <label className="col-sm-3"></label>
                        <label className="col-sm-3"><Radio />Motor Vehicle Accidents</label>
                        <label className="col-sm-3"><Radio />Municipal Law</label>
                    </div>
                    <div className="row">
                        <label className="col-sm-3"><Radio />Real Property</label>
                        <label className="col-sm-3"><Radio />Torts</label>
                        <label className="col-sm-3"><Radio />Equity</label>
                    </div>
                    <div className="row">
                        <label className="col-sm-3"><Radio />Wills and Estate</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="row">
                <span><strong>If the appeal is from a part of the judgment only</strong>, please specify the part:</span>
                <MyInput type="text" name="partOfJudgment" isPrefilled={false} />
            </div>
            <div className="row">
                <h2 className="form-heading-section--large">Order Sought</h2>
                <p>This is where you set out the order that you are asking the Court of Appeal to make. Ensure that you include any orders with respect to the costs you wish to recover if you are successful on your appeal.</p>
                <p className="small"><strong>Note</strong>: A Stay of Proceedings of the Supreme Court should not be placed in the order sought section.</p>
                <p className="small"><em><strong>And further take notice that the Court of Appeal will be moved at the hearing of this appeal for an order that:</strong></em></p>
                <MyInput type="textarea" rows={5} name="orderSought" />
            </div>
            <hr/>
            <div className="row">
                <p><strong>Please ensure that the required names and address fields are completed.</strong></p>
                <label>TO THE RESPONDENT(S)</label>
                <p className="small">The names of the parties in the Respondent Column above should populate below and you will need to add in the address for service.</p>
                <MyInput type="textarea"
                         rows={3}
                         name="toRespondents"
                         ref="respondents"/>
            </div>
            <div className="row">
                <label>AND TO THE RESPONDENT(S) SOLLICITOR</label>
                <p className="small">If counsel represented the Respondent include their name and address in the box below.<br/><strong>Note:</strong> You may serve a Notice of Appeal to the Respondent(s) solicitor in the lower court.</p>
                <MyInput type="textarea"
                         rows={3}
                         name="respondentSolicitor"
                         ref="solicitor"/>
            </div>
            <div className="row">
                <div className="col-sm-5 col-xs-12">
                    <label>This Notice of Appeal is given by</label>
                    <MyInput type="text"
                             name="appealingFirm" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 col-xs-12">
                    <label>whose address of service is</label>
                    <MyInput type="textarea" rows={4}
                        name="appealingFirmAddress" />
                </div>
            </div>
        </div>
        )
    }
}

export default Form
