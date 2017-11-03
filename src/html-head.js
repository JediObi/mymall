import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

class _Header extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="keywords" content="mymall,电商平台"/>
                    <meta name="description" content="mymall电商平台前端"/>
                </Helmet>
            </div>
        );
    }
}

export default _Header;