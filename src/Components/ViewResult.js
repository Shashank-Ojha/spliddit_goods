import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckBoxRow from './CheckBox';

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



    let nameRow;
    var column=<Col xs={6} md={2}>item</Col>;
    var makeCol = function(name, idx){
      var x=name+" preference";
      return (
        <Col xs={6} md={2} key={idx}>{x}</Col>
      )
    }
    if(this.props.names){
      nameRow = <Row>{[column].concat(this.props.names.map(makeCol.bind(this)))}</Row>;
    }

    let algoSumRow;
    var column=<Col xs={6} md={2}>Algorithm Sum</Col>;
    var makeCol = function(name, idx){
      var x=this.props.algoSum[idx];
      return (
        <Col xs={6} md={2} key={idx}>
          <p className="text-center">
            {x}
          </p>
        </Col>
      )
    }
    if(this.props.names){
      algoSumRow = <Row>{[column].concat(this.props.algoSum.map(makeCol.bind(this)))}</Row>;
    }

    let yourSumRow;
    var column=<Col xs={6} md={2}>Your Sum</Col>;
    var makeCol = function(name, idx){
      var x=this.props.sum[idx];
      return (
        <Col xs={6} md={2} key={idx}>
          <p className="text-center">
            {x}
          </p>
        </Col>
      )
    }
    if(this.props.names){
      yourSumRow = <Row>{[column].concat(this.props.sum.map(makeCol.bind(this)))}</Row>;
    }

    return(
      <div className="goodGrid">
          {nameRow}
          {goodGrid}
          {algoSumRow}
          <br/>
          {yourSumRow}

      </div>
    );
  }
}

export default ViewResult;
