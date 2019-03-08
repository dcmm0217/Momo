import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './Store';
class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div>
                        Hello Word
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
