let hostname = window.location.hostname;
let appEnvironment = 'LOCAL';

if(hostname.toLowerCase() === 'localhost'){
    appEnvironment = 'LOCAL'
}else{
    appEnvironment = 'PROD'
}

export const APP_ENV = appEnvironment;

export class Env{
    static URLs = {
        DEV :{
            BASE_URL : 'http://localhost:3001/api/v1/',
            SOCKET_URL : 'http://localhost:3002'
        },
        PROD : {
            BASE_URL : 'http://ccovidclinicbackend.centralindia.cloudapp.azure.com:3001/api/v1/',
            SOCKET_URL : 'http://covidclinicbackend.centralindia.cloudapp.azure.com:3002'
        }
    }

    static getBaseUrl(){
        return Env.URLs[APP_ENV === 'LOCAL'? 'DEV' : APP_ENV]['BASE_URL'];
    }

    static getSocketUrl(){
        return Env.URLs[APP_ENV === 'LOCAL'? 'DEV' : APP_ENV]['SOCKET_URL'];
    }
}