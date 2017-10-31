class FetchUtil {

    request(param) {
        let upRequest = new Request(param.url || '', {
            method: param.method || 'GET',
            dataType: param.type || 'json',
            data: param.data || ''
        });
        fetch(upRequest).then((response) => {
            return response.json();
        }).then(jsonData => {  
            if (0 === jsonData.status) {
                // this.testfunc(); 状态码0，代表请求成功，返回某个对象，或者在此处直接处理
                alert(0);
                // typeof param.success 取出param.success的类型，然后判断是否是function
                // 紧接一个 && ， 如果前者为true就会返回后者，后者是一个函数，所以就会执行
                typeof param.success === 'function' && param.success(jsonData.data, jsonData.msg);
            } else if (10 === jsonData.status) {
                //状态码10，需要强制登陆
                alert(10);
                this.doLogin();
            } else if (1 === jsonData.status) {
                // 状态码1，错误
                alert(1);
                typeof param.error === 'function' && param.error(jsonData.msg);
            }
        }).catch((error) => {
            //http请求本身出错
            alert('html error '+ error);
            typeof param.error === 'function' && param.error(error.statusText);
        });
    }
    testfunc() {
        alert(1);
    }
    doLogin() {
        window.location.href = './login.html?redirect=' + encodeURI(window.location.href);
    }
}

export default FetchUtil;