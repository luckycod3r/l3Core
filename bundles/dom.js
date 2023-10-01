class DOMBundle{
    constructor(){

    }

    f(q){
        return document.querySelector(q);
    }
    fa(q){
        return document.querySelectorAll(q);
    }
}

module.exports = {DOMBundle};