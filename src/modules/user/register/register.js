import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import RegisterHtml from './register.html'
import store from '../../../store/store'
import toastr from 'toastr'

import {register} from '../../../actions/user';


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            username:'',
            password:'',
        }
    }

    afterRegister = (data) =>{
        if(data.status === 201){
            toastr.success("user created successfully")
            this.props.history.push('/')
        }else{
            toastr.error("user creation failed")
        }
        
    }

    registerUser = (e)=>{
        e.preventDefault();
        if(this.state.username === '' || this.state.password === '' || this.state.firstName === '' || this.state.lastName === '' ||this.state.email === '' ){
            toastr.error("Please enter the required details");
        }else if(this.state.username.trim() === '' || this.state.password.trim() === ''|| this.state.firstName.trim() === ''||this.state.lastName.trim() === ''||this.state.email.trim() === ''){
            toastr.error("Please enter the required details");
        }

        store.dispatch(register({name:this.state.firstName + '' + this.state.lastName, email:this.state.email,password:this.state.password},{fn:this.afterRegister,scope:this}));

    }


    render(){
        return RegisterHtml.call(this);
    }
}
const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Register))
