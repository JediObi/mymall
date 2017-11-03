
const conf={
    serverHost:"",
};

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
                // typeof param.success 取出param.success的类型，然后判断是否是function
                // 紧接一个 && ， 如果前者为true就会返回后者，后者是一个函数，所以就会执行
                typeof param.success === 'function' && param.success(jsonData.data, jsonData.msg);
            } else if (10 === jsonData.status) {
                //状态码10，需要强制登陆
                this.doLogin();
            } else if (1 === jsonData.status) {
                // 状态码1，错误
                typeof param.error === 'function' && param.error(jsonData.msg);
            }
        }).catch((error) => {
            //http请求本身出错如404，或者某个then函数数据解析出错比如json()方法对象不是json格式
            console.log(error);
            typeof param.error === 'function' && param.error(error.statusText);
        });
    }
    testfunc() {
        alert(1);
    }
    //获取服务器地址
    getServerUrl(path){
        return conf.serverHost + path;
    }
    //获取url参数
    getUrlParam(name){
        const reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
        const result = window.location.search.substr(1).match(reg);
        return result?decodeURIComponent(result[2]):null;
    }
    //渲染html模板
    renderHtml(htmlTemplate, data){

    }

    // 操作成功提示
    successTips(message){
        alert(message||"操作成功！");
    }
    errorTips(message){
        alert(message||"哪里不对了~");
    }
    // 字符串验证，非空，手机号，邮箱
    validate(value, type){
        value = value.trim();
        // 非空验证
        if('require'===type){
            return !!value;
        }
        // 手机号验证
        if('phone' ===  type){
            return /^1\d{10}$/.test(value);
        }
        // 邮箱验证
        if('email'=== type){
            return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
        }
    }

    //强制登陆
    doLogin() {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    }
    // 返回主页
    goHome(){
        window.location.href = './index.html';
    }
}

export default FetchUtil;