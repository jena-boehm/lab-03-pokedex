import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import Header from './Header.js';


import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header className="header" />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="./list" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}