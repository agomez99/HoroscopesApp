import React, { Component } from 'react';
import loading from './loading.gif'
import './Loading.css'
export class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={loading} alt="loading" className="loading-img"/>
        </div>
    );
  }
}
