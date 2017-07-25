import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ButtonMenu from './Components/ButtonMenu';
import ViewResult from './Components/ViewResult';
//import CheckBox from './Components/CheckBox';
injectTapEventPlugin();
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      people: ["Alice", "Bob", "Claire","David"],
      goods: ["Gold Ring","Diamond Ring","Ruby Earring","Gold Watch"],
      algoAssignment: [1,2,3,0], // indices of the names
      currentAssignment: [1,2,3,0], // to keep track of the final result, each index corresponds to a good
      selectedM: [[0,1,0,0], // matrix grid version of currentAssignment
                  [0,0,1,0], // also needs to be initialized in init?
                  [0,0,0,1],
                  [1,0,0,0]],

      messages: {"Utilitarian":"Message 1", "Utility":"Message 2",
                 "Maximin":"Message 3"    , "Envy-Freeness":"Message 4"},
      displayedMessage: "Message 1",
      totalPoint: 1000,

      sums: [0,0,0,0], // need some init function? called only once when the page reloads

      label: [[1,2,3,4], // the points allocated
              [4,5,6,7],
              [7,8,9,10],
              [10,11,12,13]],

      algoSum: [10,2,6,10], // need to be initialized in init
    };
  }

  // init(){
  //   this.setState({sums: new Array(this.state.people.length)});
  //   // selectedM, algoSum, and other initializations
  //
  // }

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
  }

  //update currentAssignment based on selectedM
  updateCurrentAssignment(rowNum, newAssignment){
    var newCurrentAssignment = this.state.currentAssignment;
    newCurrentAssignment[rowNum]=newAssignment;
    this.setState({currentAssignment:newCurrentAssignment});
  }

  // this function is passed into the grid (ViewResult) so that the state can be updated based when the buttons are clicked
  changeAssignedTo(rowNum, newAssignment){
    var i, j, colSum;
    var newSum = [0,0,0,0];
    var M = this.state.selectedM;

    // update the particular row where the assignment is being changed
    for (j=0; j<(this.state.selectedM[0]).length; j++){
      if (j===newAssignment) {M[rowNum][j]=1;}
      else {M[rowNum][j]=0;}
    }

    this.setState({selectedM:M}); // keeps track of the current assignment
    this.updateCurrentAssignment(rowNum, newAssignment);

    // calculate the column sum
    for (j=0; j<(this.state.selectedM[0]).length; j++){
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
                        <Col xs={6} md={2}>
                          David Preferences
                        </Col>
                      </Row>

                      <ViewResult
                        names={this.state.people}
                        goods={this.state.goods} // for each good, call CheckBox
                        algoAssignment={this.state.algoAssignment}
                        assignments={this.state.selectedM} // just the matrix version of the algoAssignment
                        label={this.state.label} //allocated points
                        changeAssignedTo={this.changeAssignedTo.bind(this)}
                      />



                      // need to change this!!!!!!
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
                        <Col xs={6} md={2}>
                          {this.state.algoSum[3]}
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
                        <Col xs={6} md={2}>
                          {this.state.sums[3]}
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


export default App;
