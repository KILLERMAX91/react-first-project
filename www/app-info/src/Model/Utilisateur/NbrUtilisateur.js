import React, { Component } from 'react';

var $ = require('jquery');
var config = require('../../App/config.json');

class NbrUtilisateur extends Component{
    constructor(props) {
        super(props);

        this.getNbrUtilisateur();

        this.state = {

            nbr: ''

        };
        //var userModel = new UserModel();
        //userModel.getNbrUtilisateur(this);
    }

    getNbrUtilisateur(){
        var obj = this;
        $( document ).ready(function() {

            var url = '/api/anonymous/nbr/utilisateur';

            $.ajax({
                url: config.url+config.urlPath+url,
                dataType: 'json',
                cache: false,
                async: false,
                crossDomain: true,


                success: function(data) {

                    obj.setState({ nbr: data.total});
                },
                error: function(xhr, status, err) {
                    //console.error(this.props.url, status, err.toString());
                    return null;
                }
            });

        });
    }

    render(){
        return (
            <div>
                <span>{this.state.nbr}</span>
            </div>
        );
    }
}


export default NbrUtilisateur;