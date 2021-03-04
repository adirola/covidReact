import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import RegisterHtml from './register.html'
import store from '../../../store/store'
import toastr from 'toastr'

import {register} from '../../../actions/user';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false,
            secondModalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    deposit = (e,index) =>{
        let newArr = this.state.depositList;
        newArr[index] = e.target.value;
        this.setState({depositList:newArr});
        this.get_minLP();
    }

    get_minLP = async () =>{
        let minAmt = await this.props.contract.methods.calc_token_amount(this.state.depositList.join(','),true).call();
        this.setState({estOutput:minAmt});
    }


    render(){
        return RegisterHtml.call(this);
    }
}
const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Register))
