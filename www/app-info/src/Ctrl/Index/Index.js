import React, { Component } from 'react';
import Include from '../../Include/Include.js';
import UserNbrModel from '../../Model/Utilisateur/NbrUtilisateur.js';
import NbrForum from '../../Model/Forum/NbrForum.js';

class Index extends Component{
    render() {
        //var ajax = new Ajax();
        //var info = ajax.getJson('/forum-app/web/app_dev.php/api/anonymous/demos');
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3">
                        <Include></Include>

                    </div>
                    <div className="col-md-6">

                        <div className="panel panel-primary">
                            <div className="panel-heading">info</div>
                            <div className="panel-body">
                                Il y'a <UserNbrModel/> utilisateur(s)<br/>
                                Il y'a <NbrForum/> forum(s)<br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>

            </div>
        );
    }

}

export default Index;