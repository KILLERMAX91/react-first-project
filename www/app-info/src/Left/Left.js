import React from 'react';
import HrefObjs from './HrefObj.js';

var hrefs = [{name:"index", url:""}, {name:"index2", url:""}];

class Left extends React.Component{

    render(){
        var rows = [];
        hrefs.forEach(function(hrefObjJson) {

            rows.push( <HrefObjs hrefObjName={hrefObjJson.name} hrefObjUrl={hrefObjJson.url} ></HrefObjs> );

        });

        return (
            <ul className="nav nav-pills nav-stacked">
                {rows}
            </ul>
        );
    }
}

export default Left;