import React from 'react';
import './signin.css';
import bigpic from '../../../assets/demo/test.png';
import logo from '../../../assets/img/logo.png';

export default function () {
    return(
        <div className="login-wrapper ixed-header menu-pin">
            <div className="bg-pic">
                <img src={bigpic} data-src={bigpic} data-src-retina={bigpic} alt="" className="lazy"/>
                    <div className="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
                        <h2 className="semi-bold text-light-grey">
                                    HiTech Solutions for 7 billion + people</h2>
                        
        </div>
      </div>
      <div className="login-container bg-white heightfix">
        <div className="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
          <img src={logo} alt="logo" data-src={logo} data-src-retina={logo} width="78" height="22" />
          <p className="p-t-35">Sign into your clinic account</p>
          <form className="p-t-15" >
            <div className="form-group form-group-default">
              <label>Login</label>
              <div className="controls">
                <input value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}} type="text" name="username" placeholder="User Name" className="form-control" />
              </div>
            </div>
            <div className="form-group form-group-default">
              <label>Password</label>
              <div className="controls">
                <input type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} className="form-control" name="password" placeholder="Credentials"/>
              </div>
            </div>
            <button className="btn btn-primary btn-cons m-t-10" onClick={this.handleAuth}>Sign in</button>
            <button className="btn btn-primary btn-cons m-t-10" onClick={this.register} colour="primary">Sign up</button>
          </form>
          
        </div>
      </div>
    </div>
    );
}