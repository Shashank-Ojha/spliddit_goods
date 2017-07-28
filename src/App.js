import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ButtonMenu from './Components/ButtonMenu';
import ViewResult from './Components/ViewResult';
injectTapEventPlugin();
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: ["Alice", "Bob", "Claire","David","Ellen"],
      goods: ["Gold Ring","Diamond Ring","Ruby Earring","Gold Watch","Earring"],
      algoAssignment: [1,2,3,0,4], // indices of the names
      currentAssignment: [1,2,3,0,4], // to keep track of the final result, each index corresponds to a good
      selectedM: [[0,1,0,0,0], // matrix grid version of currentAssignment
                  [0,0,1,0,0], // also needs to be initialized in init?
                  [0,0,0,1,0],
                  [1,0,0,0,0],
                  [0,0,0,0,1]],

      messages: {"Utilitarian":"Message 1", "Utility":"Message 2",
                 "Maximin":"Message 3"    , "Envy-Freeness":"Message 4"},
      displayedMessage: "Message 1",
      totalPoint: 1000,

      sums: [0,0,0,0,0], // need some init function? called only once when the page reloads

      label: [[100,2,3,4,1], // the points allocated
              [4,5,6,7,1],
              [7,8,9,10,1],
              [10,11,12,13,1],
              [10,10,10,10,10]],

      algoSum: [10,2,6,10,1], // need to be initialized in init
    };
  }

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
    var newSum = [0,0,0,0,0];
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

    const style = {
          marginTop: 12,
          marginBottom: 12,
        };

    return (
      <div className="App">
              <Grid>

                  <Row className="show-grid">
                    <Col xs={12} md={8}>
                      <h1 id="#title"> Overview </h1>
                    </Col>
                  </Row>

                  <hr className="hr-thick" />

                  <Row className="show-grid">
                    <Col id="left" xs={12} md={4}>
                      <div id="introduction">
                        <h3> Introduction </h3>
                        <hr className="hr-thin"/>
                        <p> <strong> This page conveys the force behind Spliddit’s algorithm </strong>by explaining its assumptions, providing a place to view each participant’s preferences and results, and an interactive area where each individual can simulate/ alter the algorithm results with the other group members for discussion</p>
                      </div>
                      <div id="properties">
                        <h3> Fairness Properties </h3>
                        <hr className="hr-thin"/>
                        <p> <strong> Spliddit finds a room assignment and rent price</strong> in which you are assigned a room for a cheaper price than what you are willing to pay. We call this price difference savings.
                        </p>
                      </div>
                    </Col>
                    <Col id="right" xs={6} md={8}>
                     <div id="changesInfo">
                      <h3> Interactive Changes </h3>
                      <hr className="hr-thin width-sm"/>
                      <p> The colored buttons show each individual task with the burden associated with each task.  Click on buttons to reassign task to reveal changes to each person’s burden load index.  As long as the number of tasks are filled, you can change the assignments!
                      </p>
                      <div id="suggestions">
                        <h4> Some Suggestions </h4>
                      </div>
                      <br/>
                     </div>
                     <div>

                     <br/>
                     <br/>
                       <ViewResult
                         names={this.state.people}
                         goods={this.state.goods} // for each good, call CheckBox
                         algoAssignment={this.state.algoAssignment}
                         assignments={this.state.selectedM} // just the matrix version of the algoAssignment
                         label={this.state.label} //allocated points
                         changeAssignedTo={this.changeAssignedTo.bind(this)}
                         algoSum={this.state.algoSum}
                         sum={this.state.sums}
                       />

                     </div>
                     <br/>
                    </Col>
                  </Row>
              </Grid>
      </div>
    );
  }
}

export default App;
