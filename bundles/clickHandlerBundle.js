function clickHandlerBundleSetup(){
    eval("this.handlers = {}");
}

class clickHandlerBundle{
    constructor(){

    }

    registerClickHandler(name,callback){
        this.handlers.click[name] = callback;
    }
    callHandler(type,name,...args){
        if(this.handlers[type][name]){
            this.handlers[type][name].apply(this,args);
        }
    }
}

module.exports = {clickHandlerBundle, clickHandlerBundleSetup};