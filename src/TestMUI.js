import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import FetchUtil from './utils/mm';
import {Button} from 'antd';


class MyComponent extends Component{
    constructor(){
        super();
        this.fetchUtil=new FetchUtil();
    }
    handleClick(){
        /*this.fetchUtil.request({
            url:'./product/list.do?keyWord=1',
            success:(res)=>{
                alert('success');
                console.log(res);
            },
            error:(res)=>{
                alert('error');
                console.log(res);
            }
    });*/
    console.log(this.fetchUtil.getUrlParam('test'));
    }
    render(){
        return (
            <div>
            <Button type="primary" onClick={()=>this.handleClick()}>Button</Button>
            </div>
        );
    }
}

export default MyComponent;