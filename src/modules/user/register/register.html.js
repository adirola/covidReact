import React from 'react';
import './register.css'

export default function () {
    return(
        <div class="register-container full-height sm-p-t-30 pageMargin">
            <div class="d-flex justify-content-center flex-column full-height " >
                <img src="" alt="logo" data-src="" data-src-retina="" width="78" height="22" />
                <p className="m-t-30">
                Create a Clinic account.
                </p>
                <form id="form-register" class="p-t-15" >
                    <div class="row">
            <div class="col-md-6">
              <div class="form-group form-group-default">
                <label>First Name</label>
                <input type="text" value={this.state.firstName} onChange={(e)=>{this.setState({firstName:e.target.value})}} name="fname" placeholder="John" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-default">
                <label>Last Names</label>
                <input type="text" value={this.state.lastName} onChange={(e)=>{this.setState({lastName:e.target.value})}} name="lname" placeholder="Smith" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group form-group-default">
                <label>Covid User name</label>
                <input type="text" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}} name="uname" placeholder="yourname.pages.com (this can be changed later)" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group form-group-default">
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} name="pass" placeholder="Minimum of 4 Charactors" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group form-group-default">
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} name="email" placeholder="We will send loging details to you" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row m-t-10">
            <div class="col-lg-6">
              <p><small>I agree to the <a href="#" class="text-info">CovidCLinic Terms</a> and <a href="#" class="text-info">Privacy</a>.</small></p>
            </div>
            <div class="col-lg-6 text-right">
              <a href="#" class="text-info small">Help? Contact Support</a>
            </div>
          </div>
          <button class="btn btn-primary btn-cons m-t-10" onClick={this.registerUser}>Create a new account</button>
        </form>
      </div>
    </div>
    );
}