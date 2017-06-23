import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ButtonMenu extends Component {
  render(){
    const style = {
      margin: 12,
    };

    return(
      <MuiThemeProvider>
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          label={this.props.label}
          style={style}
        />
      </MuiThemeProvider>
    );
  }


}

export default ButtonMenu;
