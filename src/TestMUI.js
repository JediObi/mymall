import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import FetchUtil from './utils/mm';


class MyComponent extends Component{
    constructor(){
        super();
        this.fetchUtil=new FetchUtil();
    }
    handleClick(){
        this.fetchUtil.request({url:'./cart/add.do?productId=26&count=1',});
    }
    render(){
        return (
            <div>
            <RaisedButton label="Primary" backgroundColor="#00BCD4" primary={false}/>
            <RaisedButton label="Primary" primary={true} onClick={()=>this.handleClick()}/>
            </div>
        );
    }
}

export default MyComponent;