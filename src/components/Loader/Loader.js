import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    };
}
export default Loader;