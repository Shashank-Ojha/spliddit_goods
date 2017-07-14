import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: this.props.assignedTo, // 0,1,2
    };
  }

  changeActiveState(newAssignment){
    var changeActive = (function(event){
      this.setState({activeButton: newAssignment});
      this.props.changeAssignedTo(this.props.rowNum, newAssignment);
    });
    return changeActive;
  }

  decideBGColor(assignment){
    if(assignment === this.state.activeButton){
      return "#a4c639";
    }
    return "";
  }

  ifAssigned(assignment, no){
    if (assignment === no) {
      return {border: '1px solid grey', width: '150'};
    }
    return {}
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
            <Col xs={6} md={2} style={this.ifAssigned(this.props.assignedTo, 0)}>
              <MuiThemeProvider>
              <FlatButton
                backgroundColor={this.decideBGColor(0)}
                hoverColor={this.decideBGColor(0)}
                onTouchTap={this.changeActiveState(0).bind(this)}
                label={this.props.label[0]}
                style={style}
              />
              </MuiThemeProvider>
            </Col>

            <Col xs={6} md={2} style={this.ifAssigned(this.props.assignedTo, 1)}>
              <MuiThemeProvider>
              <FlatButton
                backgroundColor={this.decideBGColor(1)}
                hoverColor={this.decideBGColor(1)}
                onTouchTap={this.changeActiveState(1).bind(this)}
                label={this.props.label[1]}
                style={style}
              />
              </MuiThemeProvider>
            </Col>
            <Col xs={6} md={2} style={this.ifAssigned(this.props.assignedTo, 2)}>
              <MuiThemeProvider>
                <FlatButton
                  backgroundColor={this.decideBGColor(2)}
                  hoverColor={this.decideBGColor(2)}
                  onTouchTap={this.changeActiveState(2).bind(this)}
                  label={this.props.label[2]}
                  style={style}
                />
              </MuiThemeProvider>
            </Col>
          </Row>
    );
  }
}

export default CheckBox;
