import React, { Component } from 'react';
import logo from '../../resources/images/logo.jpg';
import '../../resources/css/App.css';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  componentWillMount() {
     this.props.postList();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HOME PAGE</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to ='/'>
        <button>IndexPage</button>
        </Link>
        <p>{this.props.homeBanners.loading === false ? this.props.homeBanners.data.map((homebanner,key)=>
          
          <img src={homebanner.imgSrc} alt="/"/>
          )
          :<p>loading...</p>
        }
        </p>
      </div>
    );
  }
}

export default HomePage;
