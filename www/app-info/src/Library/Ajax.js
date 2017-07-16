
var $ = require('jquery');
var config = require('../App/config.json');


class Ajax{

    getJson(url, data){

        if(data === 'undefined'){
            data = {};
        }

        $( document ).ready(function() {

                $.ajax({
                    url: config.url+url,
                    dataType: 'json',
                    cache: false,
                    async: false,
                    crossDomain: true,
                    data:data,

                    success: function(data) {
                        console.log(data);

                    },
                    error: function(xhr, status, err) {
                        //console.error(this.props.url, status, err.toString());
                        return null;
                    }
                });

        });




    }


}

export default Ajax;