import React , {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import logo from '../../assets/img/logo.png'



class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }

    

    render(){
        return (
        <footer className="pb-70">
			
			

        <section className="vc_row pt-60">
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">

                    <div className="lqd-column col-md-6 d-flex flex-wrap align-items-center">

                        <figure className="mr-3">
                            <img src={logo} alt="Bixbox Logo" style={{"width": 200+"px"}} />
                        </figure>

                        <p className="font-size-16 my-0">Copyright 2020 <span className="text-secondary font-weight-bold">Bixbox</span>. All Rights Reserved.</p>
                        
                    </div>
                    
                    <div className="lqd-column col-md-5 text-md-right">
                        
                        <ul className="social-icon social-icon-md mb-25">
                            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fa fa-medium"></i></a></li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>
    </footer>)
    }
}
const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Footer))
