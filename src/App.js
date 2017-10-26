import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './TestMUI';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import myThemeLight from './MyThemeLight';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myThemeLight)}>
      <MyComponent/>
      </MuiThemeProvider>
    );
  }
}

export default App;
