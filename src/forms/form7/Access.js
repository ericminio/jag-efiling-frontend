import React from 'react';

class Access extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <div className="form-section">
            <h2>User Access</h2>
            <p>
                The following users will have access to the package in CSO containing this Notice of Appeal
                once it has been submitted.
                <br /><br />
            </p>
            <table className="table table-hover">
                <colgroup>
                    <col />
                    <col style={{ width: '120px'}} />
                    <col style={{ width: '120px'}} />
                    <col style={{ width: '120px'}} />
                </colgroup>
                <thead>
                    <tr>
                        <th className="text-left">User</th>
                        <th>Read Only</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className="text-left">John Doe
                            <span className="access-role">&nbsp;(yourself)</span>
                        </td>
                        <td></td>
                        <td>
                            <span style={{opacity: "0.8"}} className="glyphicon glyphicon-ok"></span>
                        </td>
                        <td></td>
                    </tr>

                </tbody>
            </table>

            <div className="row" style={{ marginTop:'15px' }}>
                <button id="fill-notice-of-appeal" className="btn btn-primary btn-green">Fill Notice Of Appeal form</button>
            </div>
        </div>
        )
    }
}

export default Access
