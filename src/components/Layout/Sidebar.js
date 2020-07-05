import React, { Component, Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Icons from "../../services/icons";
import classNames from "classnames";
import $ from 'jquery';
import './style.scss';
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isMinimizeSideBar: false,
            isTimecard: true,
            asideBody: null,
        };
    }
    toggleBar = e => {
        e.preventDefault();
        if (window.matchMedia('(min-width: 992px)').matches) {
            $(e.target).closest('.aside').toggleClass('minimize');
        }
    }
    render() {
        const { isTimecard } = this.state;
        return (
            <>
                <div className="aside-header">
                    <Link
                        to={`/`}
                        className="aside-logo"
                    >
                        PTMESOL :X
                    </Link>
                    <a href="" className="hr-icon-bar"
                        onClick={this.toggleBar}
                    >
                        {Icons("bugger")}
                    </a>
                </div>
                <div className="aside-body pd-i-0">
                    <div
                        className={classNames(
                            `tab-pane fade`,
                            isTimecard ? "show active" : ""
                        )}
                        id="timecard-tab"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <ul className="nav nav-aside">
                            <li className="nav-label">Dashboard</li>
                            <li className="nav-item active">
                                <Link to={`/`} className="nav-link"><i data-feather="shopping-bag"></i> <span>Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/about?page=1`} className="nav-link"><i data-feather="shopping-bag"></i> <span>About</span></Link>
                            </li>
                            <li className="nav-item"><a href="dashboard-three.html" className="nav-link"><i data-feather="pie-chart"></i> <span>Cryptocurrency</span></a></li>
                            <li className="nav-item"><a href="dashboard-four.html" className="nav-link"><i data-feather="life-buoy"></i> <span>Helpdesk Management</span></a></li>
                            <li className="nav-label mg-t-25">Web Apps</li>
                            <li className="nav-item"><a href="app-calendar.html" className="nav-link"><i data-feather="calendar"></i> <span>Calendar</span></a></li>

                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(
    (Sidebar)
);