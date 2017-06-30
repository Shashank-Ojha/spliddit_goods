import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: this.props.assignedTo, // either Alice or Bob or Claire
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
      // return {display: "inline"}
      // return {backgroundColor: 'green'};
      return {border: '1px solid grey', width: '150'};
    }
    return {}
    // return {display: "inline"};
  }

  render(){
    const style = {
      margin: 12,
    };

    return(
          <Row>
            <Col xs={6} md={1}>
              {this.props.item}
            </Col>
            <Col xs={6} md={2} style={this.ifAssigned(this.props.assignment, 1)}>
              <MuiThemeProvider>
              <FlatButton
                backgroundColor={this.decideBGColor("Alice")}
                hoverColor={this.decideBGColor("Alice")}
                onTouchTap={this.changeActiveState("Alice").bind(this)}
                label={this.props.label}
                style={style}
              />
              </MuiThemeProvider>
            </Col>

            <Col xs={6} md={2} style={this.ifAssigned(this.props.assignment, 2)}>
              <MuiThemeProvider>
              <FlatButton
                backgroundColor={this.decideBGColor("Bob")}
                hoverColor={this.decideBGColor("Bob")}
                onTouchTap={this.changeActiveState("Bob").bind(this)}
                label={this.props.label}
                style={style}
              />
              </MuiThemeProvider>
            </Col>
            <Col xs={6} md={2} style={this.ifAssigned(this.props.assignment, 3)}>
              <MuiThemeProvider>
                <FlatButton
                  backgroundColor={this.decideBGColor("Claire")}
                  hoverColor={this.decideBGColor("Claire")}
                  onTouchTap={this.changeActiveState("Claire").bind(this)}
                  label={this.props.label}
                  style={style}
                />
              </MuiThemeProvider>
            </Col>
          </Row>
    );
  }
}

export default CheckBox;
