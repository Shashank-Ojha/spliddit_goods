import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './checkbox.css'

class CheckBox extends Component {
  constructor(props) {
    super();
    this.state = {
      activeButton: "NONE" // either Alice or Bob or Claire
    };
  }

  changeActiveState(name){
    var changeActive = (function(event){
      this.setState({activeButton: name});
    });
    return changeActive;
  }

  decideBGColor(name){
    if(name === this.state.activeButton){
      return "#a4c639";
    }
    return "";
  }

  ifAssigned(assignment, no){
    if (assignment === no) {
      // return {backgroundColor: 'green'};
      return {border: '1px solid grey', width: '150'};
    }
    return {width: '150'};
  }

  render(){
    const style = {
      margin: 12,
    };

    return(
      <div className="checkBox">
        <MuiThemeProvider>
          <div className="checkBox2">
            <div style={this.ifAssigned(this.props.assignment, 1)}>
              <FlatButton
                backgroundColor={this.decideBGColor("Alice")}
                hoverColor={this.decideBGColor("Alice")}
                onTouchTap={this.changeActiveState("Alice").bind(this)}
                label={this.props.label}
                style={style}
              />
            </div>

            <div style={this.ifAssigned(this.props.assignment, 2)}>
              <FlatButton
                backgroundColor={this.decideBGColor("Bob")}
                hoverColor={this.decideBGColor("Bob")}
                onTouchTap={this.changeActiveState("Bob").bind(this)}
                label={this.props.label}
                style={style}
              />
            </div>

            <div style={this.ifAssigned(this.props.assignment, 3)}>
              <FlatButton
                backgroundColor={this.decideBGColor("Claire")}
                hoverColor={this.decideBGColor("Claire")}
                onTouchTap={this.changeActiveState("Claire").bind(this)}
                label={this.props.label}
                style={style}
              />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CheckBox;
