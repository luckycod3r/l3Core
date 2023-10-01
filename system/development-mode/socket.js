function initSocket(){
    let ws = new WebSocket("ws://localhost:9000");

    let reloadOnUpdate = true;
    let socketStyles = "color: pink; font-size: 20px";
    ws.onopen = ()=>{
        console.log("%cluckycod3r.server - Режим разработчика включен.", socketStyles);
    }
    ws.onclose = ()=>{
        console.log("%cluckycod3r.server - Соединение с сервером потеряно. Требуется ручная перезагрузка страницы",socketStyles);
    }
    ws.onmessage = ((ev,data)=>{
        if(!reloadOnUpdate)console.log("%cluckycod3r.server - Клиентская часть приложения пересобрана. Требуется перезагрузка страницы",socketStyles);
        if(reloadOnUpdate)console.log("%cluckycod3r.server - Клиентская часть приложения пересобрана. Страница будет автоматически перезагружена",socketStyles);
        if(reloadOnUpdate) location.reload(true)
    })   
}
module.exports = {initSocket};