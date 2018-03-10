import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Upload, Icon } from 'antd';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import ImageWall from './ImageWall';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageWall></ImageWall>
        <DevTools></DevTools>
      </div>
    );
  }
}

export default App;
