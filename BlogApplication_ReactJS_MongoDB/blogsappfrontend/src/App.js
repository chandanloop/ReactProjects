import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import Home from './Component/Home';
import Blog from './Component/Blog';
import CreateBlog from './Component/CreateBlog';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/createblog">
                    <CreateBlog />
                </Route>
            </Router>
            );
    };
}
export default  App;