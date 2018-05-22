import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Service from './service';

const Login = () => (
  <Router>
    <div>
      <Authenticate />
    </div>
  </Router>
);

class Authenticate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    handleButtonClick() {
        let login = document.getElementById('login').value;
        if (login.length > 0) {
            let value = "login=" + document.getElementById('login').value;
            document.cookie=value;
            let service = new Service(window);
            service.savePerson(login, (data)=> {
                if (data !== undefined) {
                    this.setState({
                        authenticated: true
                    });
                }
            });
        }
    }

    handleKeyPress(target) {
        if(target.charCode === 13){
            this.handleButtonClick();
        }
    }

    componentDidMount() {

        if (document.cookie.indexOf('login=') !== -1 && document.cookie.substring('login='.length).length > 0) {
            let window = this.element.ownerDocument.defaultView;
            let service = new Service(window);            
            let login = service.user;
            service.getPersonInfo((data)=> {
                if (data && data.login === login) {
                    this.setState({
                        authenticated: true
                    })
                }
            })
        }
    }

    render() {
        if (! this.state.authenticated) {
            return (
                <div ref={ (element)=> {this.element = element }}>
                    <p>Unknown user... Please log in</p>
                    <label>login</label>
                    <input
                        name="login"
                        id="login"
                        onKeyPress={ this.handleKeyPress.bind(this) }
                        autoFocus
                    />
                    <button
                        id="go"
                        onClick={ this.handleButtonClick.bind(this) }
                    >
                        Go
                    </button>
                    <p><i>Any login will work</i></p>
                </div>
            )
        }
        else {
            return (
                <Route path='*' component={() => window.location = 'http://localhost:3000' }/>
            )
        }
    }
}

export default Login;