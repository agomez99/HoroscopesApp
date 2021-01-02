import React, { Component } from 'react';
import loading from './loading.gif'
import './Loading.css'
export class Loading extends Component {
  render() {
    return (
      <div className="loading">
        {/* <h1>{ 'Loading results for "' + this.props.searchTerm + '".' }</h1> */}
        <img src={loading} alt="loading" className="loading-img"/>
        </div>
    );
  }
}
