import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import './App.css';

import './toastr.min.css'

import Signin from './modules/user/signin/signin';
import Operator from './modules/user/operator/operator';
import Patient from './modules/user/patient/patient';
import Register from './modules/user/register/register'
import Landing from './modules/user/landing/landing'
import Footer from './sharedComponents/footer/footer'

import {auth} from './actions/authenticate';
import store from './store/store';
import StateLoader from './store/StateLoader';

import './assets/css/theme.min.css';
import './assets/css/themes/seo.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }

    this.stateLoader = new StateLoader();

  }

  componentDidMount(){

    document.title = 'Covid Clinic';
    window.baseApiUrl =  window.location.host.indexOf('localhost') >= 0 ? 'http://' + window.location.host + '/' : 'https://' + window.location.host + '/'
    this.subscription = store.subscribe(()=>{
      this.stateLoader.saveState(store.getState());
    })
  }



  render (){
    return (
      <section className="App">
        <main className="content">
          <article>
            <section className="heightfix">
              <Switch>
                <Route exact path='/' component={Landing}  />
                <Route path='/operator' component={Operator}  />
                <Route path='/patient' component={Patient} />
                <Route path='/register' component={Register} />
              </Switch>
            </section>
            <section>
              <Footer />
            </section>
          </article>
        </main>
      </section>
    );
  }

}

export const matchStateToProps = state => ({
    ...state
})


export default withRouter(connect(matchStateToProps)(App));
