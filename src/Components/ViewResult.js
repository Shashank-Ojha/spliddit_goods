import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckBoxRow from './CheckBox';

// <CheckBox item={"Gold Ring"} assignedTo={this.state.algoAssignment[0]}
//   label={this.state.label[0]}
//   changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {0}/>
//
// <CheckBox item={"Diamond Ring"} assignedTo={this.state.algoAssignment[1]}
//   label={this.state.label[1]}
//   changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {1}/>
//
// <CheckBox item={"Ruby Earring"} assignedTo={this.state.algoAssignment[2]}
//   label={this.state.label[2]}
//   changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {2}/>
//
// <CheckBox item={"Gold Watch"} assignedTo={this.state.algoAssignment[3]}
//   label={this.state.label[3]}
//   changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {3}/>

class ViewResult extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    let goodGrid;
    var makeRow = function(good, idx) {
      return (
        <div key={idx+1}>
          <Row key={idx}>
            <Col xs={6} md={2}>
              {this.props.goods[idx]}
            </Col>

            <CheckBoxRow
              item={this.props.goods[idx]}
              assignedTo={this.props.algoAssignment[idx]}
              label={this.props.label[idx]}
              changeAssignedTo={this.props.changeAssignedTo.bind(this)} // if this doesn't work, can we do 2 layers of passing 2 functions?
              rowNum = {idx}
              names={this.props.names}
            />
          </Row>
          <br/>
        </div>
      )
    }
    if(this.props.goods){
      goodGrid = this.props.goods.map(makeRow.bind(this));
    }

    return(
      <div className="goodGrid">
          {goodGrid}
      </div>
    );
  }
}

export default ViewResult;
