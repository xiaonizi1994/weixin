require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Home from '../container/home/home.container'
import {DatePicker} from 'antd';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children||<Home/>}
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
module.exports = AppComponent;
/*
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
*/
