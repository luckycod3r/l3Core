class ApplcationAPIModule{
    constructor(){
        this.url = "/app/api/self.php";
        this.pref = location.origin;
    }

    getData(action,data = {})
    {
        let url = new URL(`${location.origin}/app/api/self.php`);
        for(let i in data){
            url.searchParams.set(i,data[i]);
        }
        url.searchParams.set("get",action);
        
        return fetch(url.href,{
            method : "GET",
        })
    }

    postData(action,data = {}){
        let f = new FormData();
        let url = new URL(`${location.origin}/app/api/self.php`);
        for(let i in data){
            f.append(i,data[i]);
        }
        f.append("action",action);
        return fetch(url.href,{
            method : "POST",
            body : f,
        })
    }

    getTranportList(){
        return this.getData("transport");
    }
}

module.exports = {ApplcationAPIModule}