let {initSocket} = require("./development-mode/socket");

class Core{
    constructor(){

    }
    enableDevelopmentMode(){
        initSocket();
    }
}

module.exports = {L3Core : new Core()}