import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("/testAPI") // "http://localhost:9000/testAPI" change to /testAPI
                    // method ==> Body.text(): Promise<string>
            .then(response => response.text()) //.then(a => a.text()) response is a temporary parameter name. can be anything
            .then(response => this.setState({ apiResponse: response + "!!!!" })) //.then(b => this.setState({ apiResponse: b })) this line is running after line 14.
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">

                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}


