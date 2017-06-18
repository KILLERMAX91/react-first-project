import React from 'react';

class HrefObj extends React.Component{


    render(){
        return (
            <li>
                <a href={this.props.hrefObjUrl}> {this.props.hrefObjName} </a>
            </li>
        );
    }
}

export default HrefObj;