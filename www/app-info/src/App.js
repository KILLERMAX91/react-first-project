import React, { Component } from 'react';

import Left from './Left/Left.js';


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
                <Left></Left>
            </div>
          </div>

        </div>

    );
  }
}

export default App;
