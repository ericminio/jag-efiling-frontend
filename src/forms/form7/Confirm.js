import React from 'react';
import YesNo from './yesNoWidget';

class Confirm extends React.Component {

    render() {
        return (
        <div className="form-section">
            <h2>Do these apply to your appeal?</h2>

            <div className="row">
                <div className="col-sm-1">
                    <span className="glyphicon status-icon text-success active">1</span>
                </div>
                <div className="col-sm-11">
                    <p>Are you seeking to file your Notice of Appeal outside the time limit?</p>
                        <p className="small">Most Supreme Court orders: <strong>within 30 days of order being pronounced</strong><br />
                        Bankruptcy cases: <strong>within 10 days of order being pronounced</strong><br />
                        Pronounced means the date the order was given by the lower court and not the date it was entered by the registry.</p>
                    <YesNo name="question1" ids="outside-time-limit">
                        <blockquote className="blockquote-qualification">
                            <p>The time limit for <i>filing and serving</i> an appeal is usually 30 days commencing on the day after the order is pronounced (the date the order was spoken by the lower court judge). An appeal relating to bankruptcy needs to be filed and served within 10 days. If it is past the deadline, you need to file the Notice of Appeal along with the Notice of Motion and supporting affidavit seeking an extension of time.</p>
                            <p>You cannot do that using this process. At this time, this process does not support filing of these documents together.</p>
                        </blockquote>
                    </YesNo>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1">
                    <span className="glyphicon status-icon text-success active">2</span>
                </div>
                <div className="col-sm-11">
                    <p>Are you applying for an order to have the fees waived (not be paid)?</p>
                    <YesNo name="question2" ids="asking-for-fees-waived">
                        <blockquote className="blockquote-qualification">
                            <p>If you are applying for an order to have the fees waived, you need to file the Notice of Appeal along with the Notice of Motion and supporting affidavit (<a href="http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/fillable_forms/civil_rules_forms/Form19.pdf" target="_blank">Form 19 - Affidavit: No Fees Payable (Indigent Status)</a>).</p>
                            <p>You cannot do that using this process. At this time, this system does not support the submission of these documents together; but you can use the application to complete your Notice of Appeal form and print it off to file with the Court of Appeal Registry in person along with the other forms noted above.</p>
                        </blockquote>
                    </YesNo>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1">
                    <span className="glyphicon status-icon text-success active">3</span>
                </div>
                <div className="col-sm-11">
                    <p>Do you seek to appeal an order of a Supreme Court Master?</p>
                    <YesNo name="question3" ids="appealing-order-of-supreme-court-master">
                        <blockquote className="blockquote-qualification">
                            <p>Appeals of a Supreme Court Master's decision are typically brought to a Supreme Court Judge.</p>
                            <p>Complete and file with the Supreme Court, a Notice of Appeal from Master, Registrar or Special Referee form.</p>
                            <p>Supreme Court Civil <a href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/17_168_2009%20-%20Supreme%20Court%20Civil%20Rules/168_2009_03.xml#subrule_d2e32458" target="_blank">Rule 23-6 (8)</a>: <a href="http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/168_2009_04#Form121" target="_blank">Form 121</a><br />
                            Supreme Court Family <a href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/18_169_2009%20-%20Supreme%20Court%20Family%20Rules/169_2009_03.xml#subrule_d2e28133" target="_blank">Rule 22-7 (8)</a>: <a href="http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/169_2009_04#F98" target="_blank">Form F98</a></p>
                        </blockquote>
                    </YesNo>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1">
                    <span className="glyphicon status-icon text-success active">4</span>
                </div>
                <div className="col-sm-11">
                    <p>Do you seek to appeal a Provincial Court Order?</p>
                    <YesNo name="question4" ids="appealing-province-court-order">
                        <blockquote className="blockquote-qualification">
                            <p>The appeal would typically be brought in the Supreme Court by filing a Notice of Appeal if Direction Required and a Notice of Appeal - Standard Directions with the Supreme Court.</p>
                            <p>Supreme Court Civil <a href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/17_168_2009%20-%20Supreme%20Court%20Civil%20Rules/168_2009_02.xml#rule18-3" target="_blank">Rule 18-3</a>: <a href="http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/168_2009_04#Form73" target="_blank">Form 73</a> or <a href="http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/168_2009_04#Form74" target="_blank">Form 74</a><br />
                            Supreme Court Family <a href="http://www.bclaws.ca/civix/document/LOC/complete/statreg/--%20C%20--/Court%20Rules%20Act%20[RSBC%201996]%20c.%2080/05_Regulations/18_169_2009%20-%20Supreme%20Court%20Family%20Rules/169_2009_03.xml#rule18-3" target="_blank">Rule 18-3</a>:  <a href="http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/169_2009_04#F79" target="_blank">Form F79</a> or <a href="http://www.bclaws.ca/EPLibraries/bclaws_new/document/ID/freeside/169_2009_04#F80" target="_blank">Form F80</a></p>

                        </blockquote>
                    </YesNo>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1">
                    <span className="glyphicon status-icon text-success active">5</span>
                </div>
                <div className="col-sm-11">
                    <p>Are you representing yourself?</p>
                    <YesNo name="question5" ids="representing-yourself">
                        <blockquote className="blockquote-qualification">
                            <p>If you are representing yourself in the Court of Appeal, you will need to learn about the court system and specific procedures in the Court of Appeal.  The following link will provide you access to information on the Court of Appeal processes and how you can prepare case:</p>
                            <p><a target="_blank" href="http://www.courtofappealbc.ca/?ct=t(primary-menu)">Court of Appeal information</a></p>
                        </blockquote>
                    </YesNo>
                </div>
            </div>

            <div className="row" style={{ marginTop:'15px' }}>
                <button id="goto-notice-of-appeal" className="btn btn-primary btn-green">Continue to Notice Of Appeal</button>
            </div>
        </div>
        )
    }
}

export default Confirm
