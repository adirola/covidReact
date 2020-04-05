import HttpHelper from '../services/HttpHelper';
import toastr from 'toastr'

export function register(data,callback){
    let http = new HttpHelper();
    return (dispatch) => {
        //dispatch(authenticate({loading:true,info:{}}));
        http.post('USER',data,{}).then(res =>{
            //dispatch(authenticate({loading:false,info:res.data}));
            if(callback){
                callback.fn.call(callback.scope,res);
            }
        }).catch( err =>{
            //dispatch(authenticate({loading:true,info:err}));
            toastr.error("Error Connecting to the api");
        })
    }
}