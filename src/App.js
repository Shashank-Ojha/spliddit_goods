import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ButtonMenu from './Components/ButtonMenu';
import CheckBox from './Components/CheckBox';
injectTapEventPlugin();
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      algoAssignment: [1,2,1,0],

      sums: [0,0,0],

      label: [[1,2,3],
              [4,5,6],
              [7,8,9],
              [10,11,12]],

      selectedM: [[0,1,0],
                  [0,0,1],
                  [0,1,0],
                  [1,0,0]],
      algoSum: [10,10,6],
    };
  }

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
  }

  changeAssignedTo(boxIdx, buttonIdx){
    var i, j, colSum;
    var newSum = [0,0,0];
    var M = this.state.selectedM;
    for (i=0; i<3; i++){
      if (i === buttonIdx) {
        M[boxIdx][i]=1;
      }
      else M[boxIdx][i]=0;
    }

    this.setState({selectedM:M});

    for (j=0; j<3; j++){
      colSum = 0;
      for (i=0; i<this.state.selectedM.length; i++){
        colSum = colSum + this.state.label[i][j] * this.state.selectedM[i][j];
      }
      newSum[j] = colSum;
    }
    this.setState({sums: newSum});
  }

  render() {
    return (
      <div className="App">
      <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={8}>
                    <h1>Explore Your Results</h1>
                  </Col>

                  <Col xs={6} md={4}>
                    <h4>Diamond Ring</h4>
                    <h4>Gold Watch</h4>
                  </Col>
                </Row>

                <hr />

                <Row className="show-grid">
                  <Col xs={12} md={6}>
                    <h4>Division Algorithms for Goods</h4>
                    <p> The rent calculator helps roomates to fairly share rent
                    when moving into a new house or apartment. This is
                    especially useful when bedrooms differ in size, closet
                    space, bathrooms, and more. </p>
                  </Col>
                  <Col xs={6} md={2}>
                  </Col>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>


                <Row className="show-grid">
                  <Col xs={12} md={4}>
                    <h4>Fairness Properties</h4>
                    <p> See how it works </p>
                    <ButtonMenu />
                  </Col>
                  <Col xs={6} md={8}>
                    <h4>Results</h4>
                    <p> To adjust results, click on the preference buttons </p>

                    <Grid>

                      <Row>
                        <Col xs={6} md={1}>
                          Items
                        </Col>
                        <Col xs={6} md={2}>
                          Alices Preferences
                        </Col>
                        <Col xs={6} md={2}>
                          Bob Preferences
                        </Col>
                          <Col xs={6} md={2}>
                          Claire Preferences
                        </Col>
                      </Row>

                      <CheckBox item={"Gold Ring"} assignedTo={this.state.algoAssignment[0]}
                        label={this.state.label[0]}
                        changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {0}/>

                      <CheckBox item={"Diamond Ring"} assignedTo={this.state.algoAssignment[1]}
                        label={this.state.label[1]}
                        changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {1}/>

                      <CheckBox item={"Ruby Earring"} assignedTo={this.state.algoAssignment[2]}
                        label={this.state.label[2]}
                        changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {2}/>

                      <CheckBox item={"Gold Watch"} assignedTo={this.state.algoAssignment[3]}
                        label={this.state.label[3]}
                        changeAssignedTo={this.changeAssignedTo.bind(this)} rowNum = {3}/>

                      <Row>
                        <Col xs={6} md={1}>
                          Algorithm Sum
                        </Col>
                        <Col xs={6} md={2}>
                          {this.state.algoSum[0]}
                        </Col>
                        <Col xs={6} md={2}>
                          {this.state.algoSum[1]}
                        </Col>
                          <Col xs={6} md={2}>
                          {this.state.algoSum[2]}
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={6} md={1}>
                          Your Sum
                        </Col>
                        <Col xs={6} md={2}>
                          {this.state.sums[0]}
                        </Col>
                        <Col xs={6} md={2}>
                          {this.state.sums[1]}
                        </Col>
                          <Col xs={6} md={2}>
                          {this.state.sums[2]}
                        </Col>
                      </Row>


                    </Grid>
                  </Col>
                </Row>



                <Row className="show-grid">
                  <Col xs={6} md={6}>
                    <h1>Expanded View</h1>
                    <p>Some Text</p>
                  </Col>

                  <Col xs={6} md={6}>
                  </Col>
                </Row>

                <br/>

                <Row className="show-grid">
                  <Col xs={6} md={2}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>
                </Row>

                <Row className="show-grid">
                  <Col xs={6} md={2}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>
                </Row>

          </Grid>
      </div>
    );
  }
}

// need to know if we want to draw the border or not
// style the border with css?
// how to change the shape and center?

export default App;
