import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Landing from './landing.html'
import store from '../../../store/store'
import toastr from 'toastr'

import {auth} from '../../../actions/authenticate';
import landingHtml from './landing.html'


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }

    afterAuth = (data) =>{
        console.log(data);
        if(data && data.data){
            if(data.data.role.toLowerCase() === 'operator'){
            this.props.history.push('/operator')
            }else{
            this.props.history.push('/patient')
            }
        }
    }

    handleAuth = (e)=>{
        e.preventDefault();
        if(this.state.username === '' || this.state.password === ''){
            toastr.error("Please enter username and password");
        }else if(this.state.username.trim() === '' || this.state.password.trim() === ''){
            toastr.error("Please enter username and password");
        }

        store.dispatch(((auth({email:this.state.username,password:this.state.password},{fn:this.afterAuth,scope:this}))));

    }

    gotoCanvas = () =>{
        this.props.history.push('/signin')
    }

    register = () =>{
        this.props.history.push('/register')
    }

    render(){
        return landingHtml.call(this);
    }
}
const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(LandingPage))
