import React from 'react';
import Connect from './Connect.js';
import Deconnect from './Deconnect.js';
import Authorization from '../../Library/Authorization.js';

class Login extends React.Component{
    render() {
        var authorization = new Authorization();
        if(!authorization.isNull('access_token')){
            return (
                <Deconnect></Deconnect>
            );
        }else{
            return (
                <Connect></Connect>
            );
        }

    }
}


export default Login;