import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Buttons from './components/Buttons';
import SideBar from "./components/Layout/Sidebar";
import './App.css';
import './lib/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/dashforge.css';
import './assets/css/dashforge.dashboard.css';
import './assets/js/dashforge.aside.js';

function App() {
  return (
    <Router>
      <div className="App">
        <aside className="aside aside-fixed">
          <SideBar />
        </aside>
        <div className="content ht-100v pd-0">
          <div className="content-header">
            <div className="content-search">
              <i data-feather="search"></i>
              <input type="search" className="form-control" placeholder="Search..." />
            </div>
            <nav className="nav">
              <a href="" className="nav-link"><i data-feather="help-circle"></i></a>
              <a href="" className="nav-link"><i data-feather="grid"></i></a>
              <a href="" className="nav-link"><i data-feather="align-left"></i></a>
            </nav>
          </div>
          <div className="content-body">
            <div className="container pd-x-0">
              <div className="content content-components">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/buttons">
                    <Buttons />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Router>
  );
}

export default App;
