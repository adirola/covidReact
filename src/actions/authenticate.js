import HttpHelper from '../services/HttpHelper';
import toastr from 'toastr'

function authenticate(data){
    return{
        type:'AUTH',
        payload:data
    }
}

export function auth(data,callback){
    let http = new HttpHelper();
    return (dispatch) => {
        dispatch(authenticate({loading:true,info:{}}));
        http.post('AUTH',data).then(res =>{
            dispatch(authenticate({loading:false,info:res.data}));
            if(callback){
                callback.fn.call(callback.scope,res.data);
            }
        }).catch( err =>{
            dispatch(authenticate({loading:true,info:err}));
            toastr.error("Error");
        })
    }
}