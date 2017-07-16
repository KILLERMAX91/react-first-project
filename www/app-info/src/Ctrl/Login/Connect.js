import React from 'react';
import Include from '../../Include/Include.js';
import LoginModel from '../../Model/Utilisateur/Login.js';

/**
 *
 */
class Connect extends React.Component{
    constructor(props) {

        super(props);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.state = {

            mail: '',
            password: ''

        };


    }

    /**
     *
     * @param e
     */
    handleMailChange(e){
        this.setState({ mail: e.target.value });

    }

    /**
     *
     * @param e
     */
    handlePasswordChange(e){
        this.setState({ password: e.target.value });
    }

    /**
     *
     */
    loginClick(){

        var login = new LoginModel();
        login.connect(this.state.mail, this.state.password);
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Include/>
                    </div>
                    <div className="col-md-6">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label  for="inputEmail3" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={ this.handleMailChange } className="form-control" id="inputEmail3" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-5">
                                    <input type="password" onChange={ this.handlePasswordChange } className="form-control" id="inputPassword3" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button onClick={this.loginClick} type="submit" className="btn btn-default">Se connecter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Connect;