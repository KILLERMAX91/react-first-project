import Authorization from '../../Library/Authorization.js';
import axios from 'axios';
var $ = require('jquery');
var config = require('../../App/config.json');

class Login{

    /**
     * Cette méthode permet de se connecter au
     * @param mail
     * @param password
     */
    connect(mail, password){
        var login = this;
        $( document ).ready(function() {

            var url = '/api/anonymous/connect/client';

            $.ajax({
                url: config.url+config.urlPath+url,
                dataType: 'json',
                cache: false,
                async: false,
                crossDomain: true,
                data:{'username':mail, 'password':password},

                success: function(data, textStatus) {

                    login.connectToken(data.redirect);
                },
                error: function(xhr, status, err) {
                    console.log(err);
                    //console.error(this.props.url, status, err.toString());
                    return null;
                }
            });

        });
    }

    deconnect(){

        $( document ).ready(function() {
            var url = '/deconnect';
            var authorization = new Authorization();



            var AuthStr = 'Bearer '+authorization.getAuthorizationUrl();
            axios.post(config.url+config.urlPath+url, {
                    //headers: { Authorization: AuthStr }
                })
                .then(response => {
                    // If request is good...
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log('error ' + error);
                });

           /* axios.get(config.url+config.urlPath+url, {
                method:"GET",
                /*headers: {
                    'Authorization': 'Bearer ' + authorization.getAuthorizationUrl(),
                    'crossDomain': true,
                    'content-type': 'application/x-www-form-urlencoded',
                    'accept': 'application/json',
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
         /*
            $.ajax({
                url: config.url+config.urlPath+url,
                dataType: 'jsonp',
                data: {
                    alt: 'json-in-script'
                },
                success: function(data, status) {
                    return console.log("The returned data", data);
                },
                headers: {"Authorization": authorization.getAuthorizationUrl()},
                beforeSend: function(xhr, settings) {
                    console.log(authorization.getAuthorizationUrl());
                    xhr.setRequestHeader('Authorization',authorization.getAuthorizationUrl());
                }
            });
            /*$.ajax({
                url: config.url+config.urlPath+url,
                type: 'GET',
                dataType: 'json',
                cache: false,
                async: false,
                crossDomain: true,
                headers: {
                    "Authorization": authorization.getAuthorizationUrl()
                },
                beforeSend: function(xhr, settings){

                    xhr.setRequestHeader('Authorization', authorization.getAuthorizationUrl());

                    console.log(authorization.getAuthorizationUrl());
                },
                success: function(data, textStatus) {

                    console.log(data);
                },
                error: function(xhr, status, err) {
                    console.log(err);
                    //console.error(this.props.url, status, err.toString());
                    return null;
                },

            });*/
        });
    }
    /**
     * Cette méthode permet de récupérer le token
     * @param url
     */
    connectToken(url){

        $( document ).ready(function() {

            $.ajax({
                url: config.url+url,
                dataType: 'json',
                cache: false,
                async: false,
                crossDomain: true,

                success: function(data, textStatus) {

                    Authorization.configJsonStatic(config);

                    var authorization = new Authorization();
                    authorization.setKey('access_token', data.access_token);
                    authorization.setKey('token_type', data.token_type);
                    authorization.setKey('expires_in', data.expires_in);
                    authorization.setKey('refresh_token', data.refresh_token);
                    authorization.setKey('date_connection', new Date());

                },
                error: function(xhr, status, err) {
                    console.log(err);
                    //console.error(this.props.url, status, err.toString());
                    return null;
                }
            });

        });
    }



}

export default Login;