import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import Navigation from './components/Navigation';
import Home from './pages/Home/Home';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch >
        )
    }
}

export default Routes;