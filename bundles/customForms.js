class CustomFormBundle{
    constructor(){
        
    }
    newCustomForm(formName){
        let data = {};

        document.querySelectorAll(`[data-form-name="${formName}"]`).forEach((input)=>{
            if(input.value.length > 0){
                data[input.dataset.actionName] = input.value;
            }
        })

        return data;
    }

    getInputsFromCustomForm(token){
        return document.querySelectorAll(`[data-name="${token}"]`);
    }
}

module.exports = {CustomFormBundle}