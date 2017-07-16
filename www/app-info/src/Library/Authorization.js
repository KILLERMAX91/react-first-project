var configJson = require('../App/config.json');

class Authorization{


    static configJsonStatic(n) {
        if (n === undefined) {
            n = configJson;
        }
        return n;
    }

    constructor() {


        this.staticConfig = Authorization.configJsonStatic();


    }

    /**
     * Cette méthode vérifie si le paramétre existe
     * @param String $key
     * @returns {boolean}
     */
    isExist($key){
        var bool = true;
        if (this.staticConfig[$key] === undefined) {
            bool = false;
        }
        return bool;
    }
    isNull($key){
        var bool = false;
        if(this.staticConfig[$key] === null){
            bool = true;
        }
        return bool;
    }
    /**
     *
     * @param $key
     * @returns {*}
     */
    getKey($key){
        return this.staticConfig[$key];
    }

    /**
     *
     * @param $key
     * @param $value
     */
    setKey($key, $value){
        this.staticConfig[$key] = $value;
    }

    getAuthorizationUrl(){
       // var url = this.getKey("token_type")+" "+this.getKey("access_token");
        var url = this.getKey("access_token");
        return url;
    }
}

Authorization.staticConfig = 'fff';

export default Authorization;