import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ButtonMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      activeButton: "Utilitarian"
    };
  }

  makeFunction(name) {
    var changeActive = (function(event){
      this.setState({activeButton: name});
    });
    return changeActive;
  }

  decideBGColor(name){
    if(name === this.state.activeButton)
      return "#a4c639";
    return ""
  }

  render(){
    const style = {
      margin: 12,
    };

    return(
      <MuiThemeProvider>
        <FlatButton
          backgroundColor={this.decideBGColor(this.props.label)}
          hoverColor="#8AA62F"
          onTouchTap={this.makeFunction(this.props.label).bind(this)}
          label={this.props.label}
          style={style}
        />
      </MuiThemeProvider>
    );
  }
}

export default ButtonMenu;
