import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Signinhtml from './signin.html'
import store from '../../../store/store'
import toastr from 'toastr'


import {auth} from '../../../actions/authenticate';


class Signin1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }

    componentDidMount(){
        var settings = {};
        settings['canvas'] = document.getElementById('tablet-canvas');
        settings['canvasScale'] = .5;
        var library = this.getLibrarySettings(settings);
        console.log(library);


    }

    getLibrarySettings = (a) =>{
        a = a || {};
        this.window_ = a.window || window;
        this.document_ = a.document || window.document;
        this.onError_ = a.onError || null;
        this.onAssetLoadError_ = a.onAssetLoadError || null;
        this.soundManager_ = a.soundManager || this.window_.soundManager;
        this.url_ = a.url || "" + this.window_.location;
        this.lineWidth_ = this.initialLineWidth_;
        this.textAlign_ = this.initialTextAlign_;
        this.loadedSounds_ = {};
        this.initialFillStyle_ = this.initialStrokeStyle_ = "#000";
        this.initialFontFace_ = "Roboto";
        this.initialFontSize_ = 40;
        this.canvasScale_ = a.canvasScale || 1;
        this.canvas_ = a.canvas;
        console.log(a.canvas);
        console.log(this.window_);
    }

    register = () =>{
        this.props.history.push('/register')
    }

    render(){
        return Signinhtml.call(this);
    }
}
const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Signin1))
