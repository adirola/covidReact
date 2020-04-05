import { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import store from '../store/store';
import { Env } from '../api.config';
import {URLs} from './http.props';


export default class HttpHelper extends Component{
    constructor(props){
        super(props);
        this.baseUrl = Env.getBaseUrl();
        this.socketUrl = Env.getSocketUrl();

    }

    auth(){
        let URL = this.baseUrl + URLs['AUTH'];
        return axios.get(URL,{withCredentials:true});
    }

    get(Key,pathParams,bodyParams){
        let URL = this.baseUrl + URLs[Key];
        return axios.get(URL,{params:bodyParams});
    }

    post(Key,postBody,bodyParams){
        let URL = this.baseUrl + URLs[Key];
        return axios.post(URL,postBody,{params:bodyParams});
    }

    put(Key,postBody,bodyParams){
        let URL = this.baseUrl + URLs[Key] +'/'+bodyParams.id;
        return axios.put(URL,postBody,{params:{}});
    }
}
