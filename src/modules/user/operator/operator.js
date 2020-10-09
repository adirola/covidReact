import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Operatorhtml from './operator.html'
import store from '../../../store/store'
import toastr from 'toastr'
import { getDoc,toggleStatus } from '../../../actions/doctors';
import { Env } from '../../../api.config';




var socket;
class Operator extends Component {
    constructor(props){
        super(props)
        this.state = {
            endpoint:Env.getSocketUrl(),
            status : 'Offline',
            doctorsList :[]
        }
         
    }

    toggleDoc = (index,key)=>{
        store.dispatch(toggleStatus(this.state.doctorsList[index]._id,{fn:this.syncList,scope:this}))
    }

    syncList = (data)=>{
        if(data.status === 200){
            toastr.success("status change successfull");
        }else{
            toastr.error("status change unsuccessfull");
        }
        store.dispatch(getDoc({fn:this.processDoc,scope:this}))
    }

    toggle = (e,key)=>{
        if(key.toLowerCase() === 'online'){
            this.setState({status:'Online'});
        }else{
            this.setState({status:'Offline'});
        }
    }

    processDoc = (docList) =>{
        this.setState({doctorsList:docList.data});
    }


    componentDidMount(){
        console.log(this.props.authenticate.info);
        store.dispatch(getDoc({fn:this.processDoc,scope:this}))
    }

    render(){
        return Operatorhtml.call(this);
    }


}


const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Operator))
