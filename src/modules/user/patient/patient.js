import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Patienthtml from './patient.html'
import store from '../../../store/store'
import toastr from 'toastr';
import { Env } from '../../../api.config';

import socketIOClient from "socket.io-client";

var socket;
class Patient extends Component {
    constructor(props){
        super(props)
        this.state = {
            endpoint:Env.getSocketUrl(),
            info : {},
            iframeUrl:''
        }
    }

    getParams = (query) =>{
        if (!query) {
            return { };
        }
    
        return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
            let [ key, value ] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, { });
    }

    openAppointment= () =>{
        if(this.state.iframeUrl === ''){
            toastr.error("No url available")
        }else{
            window.open(this.state.iframeUrl,'_blank');
        }
    }

    scheduleAppointment = () =>{
        let params = this.getParams('?id='+this.props.authenticate.info.data.id);
        var i = 0
        if (!params || !params.id) {
            return;
        }
        this.id = params.id;
        try{
            socket = socketIOClient(this.state.endpoint,{query: `patient=${params.id}`});
            toastr.success("Request Sent Successfully")
        }catch(err){
            toastr.error("Request Unsuccessfull")
        }
        socket.on('update', data => {

            console.log(typeof data);
            if(typeof data === 'string'){
                if(data.toLowerCase() ==='doctors not free')
                toastr.error("No Doctor available")
            }else{
                while(i<1){
                    toastr.success("Appointment Scheduled")
                    ++i
                }
                this.setState({info:data})
            }
        });
        socket.on('connect', _ => {
            console.log(`Connected.`);
        });

        socket.on('redirect', data => {
            this.setState({iframeUrl:data.url});
        });

        socket.on('disconnect', function () {
            console.log('you have been disconnected');
        });

        socket.on('reconnect', function () {
            console.log('you have been reconnected');
        });

        socket.on('reconnect_error', function () {
            console.log('attempt to reconnect has failed');
        });
        
    }

    render(){
        return Patienthtml.call(this);
    }


}


const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Patient))
