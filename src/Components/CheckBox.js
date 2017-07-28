import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CheckBoxRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: this.props.assignedTo, // 0,1,2,3
    };
  }

  changeActiveState(newAssignment){
    var changeActive = (function(event){
      this.setState({activeButton: newAssignment});
      this.props.changeAssignedTo(this.props.rowNum, newAssignment);
    });
    return changeActive;
  }

  ifAssigned(assignment, no){
    if (assignment === no) {
      return {border: '2px solid black', width: '130'};
    }
    return {}
  }

  decideBGColor(idx){
    if(idx===this.state.activeButton){
      return "pink";
    }
    return "";
  }

  render(){
    let button;
    var SingleButton = function(name, idx){
      return (
        <div key={idx}>
          <Col xs={6} md={2} key={idx} style={this.ifAssigned(this.props.assignedTo, idx)}>
            <MuiThemeProvider>
              <FlatButton
                key={idx}
                backgroundColor={this.decideBGColor(idx)}
                onTouchTap={this.changeActiveState(idx).bind(this)}
                label={this.props.label[idx]}
              />
            </MuiThemeProvider>
          </Col>
        </div>
      )}

    if(this.props.names){
      button=this.props.names.map(SingleButton.bind(this));
    }

    return (
      <div className="buttonRow">
          {button}
      </div>
    );
  }
}

export default CheckBoxRow;
