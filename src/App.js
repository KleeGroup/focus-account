//Dependencies
import React, { Component } from 'react';
import accountStoreInstance from './built-in-store';
import {load} from './action/account';

//Default values
const EMPTY_ACCOUNT = {
    displayName: 'none',
    picture: "http://labs.qnimate.com/portfolio-materialize/images/profile.png"
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.displayName = "Account";
    this.state = {account: EMPTY_ACCOUNT, isProfileDetail: false};
  }
  componentWillMount(){
    accountStoreInstance.addAccountChangeListener((data)=>{
      console.log('Change account');
      this.setState({account: accountStoreInstance.getAccount() || EMPTY_ACCOUNT});
    });
    load(this.props.id);
  }
  _renderProfileDetail(){
    let {displayName, picture} = this.state.account;
    return (
      <div data-focus="account" onClick={this._toggleProfileDetail.bind(this)}>
        <h6>Profile</h6>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <img src={picture} width="64" height="64"/>
            <p>{displayName}</p>
          </div>
          <div className="card-action">
            <a href="#">Link</a>
            <a href='#'>Link</a>
          </div>
        </div>
      </div>
    );
  }
  _toggleProfileDetail(){
    this.setState({isProfileDetail: !this.state.isProfileDetail});
  }
  _renderProfileBar(){
    let {displayName, picture} = this.state.account;
    return (
      <div data-focus="profile-bar" onClick={this._toggleProfileDetail.bind(this)}>
        <img src={picture} width="64" height="64" />
        <p >{displayName}</p>
      </div>
    );
  }
  render() {
    return (
        this.state.isProfileDetail ? this._renderProfileDetail() : this._renderProfileBar()
    );
  }
}
