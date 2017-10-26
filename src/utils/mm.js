class FetchUtil {
    
    request(param) {
        const _this=this;
        let upRequest = new Request(param.url || '', {
            method: param.method || 'GET',
            dataType: param.type || 'json',
            data: param.data || '',
        });
        fetch(upRequest).then((response) => {
            return response.json();
        }).then(
           jsonData => {
               _this.testfunc();
                //状态码0，代表请求成功，返回某个对象，或者在此处直接处理
                if(0 === jsonData.status){
                    typeof param.success === 'function' && param.success(jsonData.data, jsonData.msg);
                }
                //状态码10，需要强制登陆
                else if(10 ===  jsonData.status){

                }
            }).catch(
            () => {
                console.log('出错');
            });
    }
    testfunc(){
        alert(1);
    }
    doLogin(){
        window.location.href= './login.html?redirect='+encodeURI(window.location.href);
    }
}

export default FetchUtil;