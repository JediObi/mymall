import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './TestMUI';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import myThemeLight from './MyThemeLight';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Helmet} from 'react-helmet';
import './App.less';
import FixedPage from './mylayout/fixed';
import FixedHeaderPage from './mylayout/fixed-header';
import ResponsePage from './mylayout/response-page';

class App extends Component {
  render() {
    return (
      //<MuiThemeProvider muiTheme={getMuiTheme(myThemeLight)}>
      <div className="App">
      <Helmet>
      <title>app title</title>
      </Helmet>
      <ResponsePage/>
      //<MyComponent test="hello"/>
      </div>
      //</MuiThemeProvider>
    );
  }
}

export default App;
