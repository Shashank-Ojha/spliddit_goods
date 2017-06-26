import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CheckBox extends Component {
  constructor(props) {
    super();
    this.state = {
      isActive: false
    };
  }

  changeActiveState(){
    var changeActive = (function(event){
      this.setState({isActive: !this.state.isActive});
    });
    console.log("clicked");
    console.log(this.state.isActive);
    return changeActive;
  }

  decideBGColor(){
    if (this.state.isActive)
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
          backgroundColor={this.decideBGColor()}
          hoverColor={this.decideBGColor()}
          onTouchTap={this.changeActiveState().bind(this)}
          label={this.props.label}
          style={style}
        />
      </MuiThemeProvider>
    );
  }
}

export default CheckBox;
