import React, { Component } from 'react';
import logo from '../../resources/images/logo.svg';
import '../../resources/css/App.css';
import {Link} from 'react-router-dom';
class IndexPage extends Component {
  componentWillMount(){
    this.props.count();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">INDEX PAGE</h1>
        </header>
        <p className="App-intro">
<<<<<<< HEAD
          To get started,  edit <code>src/App.js</code> and save to reload.
=======
          To get started, edit <code>src/App.js</code> and save to reload .
>>>>>>> a3b9459e6bc3f6dd7c12f17fbfa72092c3dca9b3
        </p>
        <Link to ='/homepage'>
        <button>HomePage</button>
        </Link>
        <p>{this.props.countingData.loading === false ? this.props.countingData.data.map((data,key)=> 
          <h1>{data}</h1>): <p>loading...</p> }
        </p>
      </div>
    );
  }
}

export default IndexPage;
