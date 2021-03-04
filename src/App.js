import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import './App.css';

import './toastr.min.css'

import SwapComponent from './modules/pool/swap/swap';

import store from './store/store';
import StateLoader from './store/StateLoader';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }

    this.stateLoader = new StateLoader();

  }

  componentDidMount(){

    document.title = 'Melon Finance';
    window.baseApiUrl =  window.location.host.indexOf('localhost') >= 0 ? 'http://' + window.location.host + '/' : 'https://' + window.location.host + '/'
    this.subscription = store.subscribe(()=>{
      this.stateLoader.saveState(store.getState());
    })
  }



  render (){
    return (
      <section className="App">
        <main>
          <article>
            <section>
              <div className="container">
                <Switch>
                  <Route exact path='/' component={SwapComponent} />
                </Switch>
              </div>
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
