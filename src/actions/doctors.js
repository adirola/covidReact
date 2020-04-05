import HttpHelper from '../services/HttpHelper';
import toastr from 'toastr'



export function getDoc(callback){
    let http = new HttpHelper();
    return (dispatch) => {
        //dispatch(authenticate({loading:true,info:{}}));
        http.get('DOC',{}).then(res =>{
            //dispatch(authenticate({loading:false,info:res.data}));
            if(callback){
                callback.fn.call(callback.scope,res.data);
            }
        }).catch( err =>{
            //dispatch(authenticate({loading:true,info:err}));
            toastr.error("Error Connecting to the api");
        })
    }
}

export function toggleStatus(id,callback){
    let http = new HttpHelper();
    return (dispatch) => {
        //dispatch(authenticate({loading:true,info:{}}));
        http.put('DOC',{},{id:id}).then(res =>{
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