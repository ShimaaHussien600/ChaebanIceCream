import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import Navigation from './components/Navigation';
import Input from './pages/Input/Input';
import Output from './pages/Output/Output';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" component={Input} exact />
                <Route path="/output" component={Output} exact />
            </Switch >
        )
    }
}

export default Routes;