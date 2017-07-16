import React from 'react';
import HrefObjs from './HrefObj.js';
import Authorization from '../Library/Authorization';
import Login from '../Model/Utilisateur/Login.js';
var hrefs = [
        {name:"index", url:"/#"},
        {name:"utilisateurs", url:"/#/utilisateurs"},
        {name:"forums", url:"/#/forum"}
    ];

class Left extends React.Component{
    constructor(props) {

        super(props);
        this.deconnecterClick = this.deconnecterClick.bind(this);
    }


    deconnecterClick(){
        var login = new Login();
        login.deconnect();
    }

    render(){
        var rows = [];
        hrefs.forEach(function(hrefObjJson) {

            rows.push( <HrefObjs hrefObjName={hrefObjJson.name} hrefObjUrl={hrefObjJson.url} ></HrefObjs> );

        });
        var info;
        var authorization = new Authorization();
        if(!authorization.isNull('access_token')){
            info = (<button  onClick={this.deconnecterClick} className="btn btn-danger btn-block">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span> se déconnecter
            </button>);
        }else{
            info = (<a href="/#/login" className="btn btn-primary  btn-block">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span> se connecter
            </a>);
        }

        return (
            <div>
                <ul className="nav nav-pills nav-stacked">
                    {rows}
                </ul>
                <div>
                    {info}
                </div>
            </div>

        );
    }
}

export default Left;