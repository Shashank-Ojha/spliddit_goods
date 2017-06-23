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

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
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
                    <h3>Diamond Ring</h3>
                    <h3>Gold Watch</h3>
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
                  <Col xs={12} md={6}>
                    <h4>Fairness Properties</h4>
                    <p> See how it works </p>
                    <ButtonMenu />
                  </Col>
                  <Col xs={6} md={6}>
                    <h4>Results</h4>
                    <p> To adjust results, click on the preference buttons </p>

                    <Grid>
                      <Row>
                        <Col xs={6} md={2}>
                        Items
                        </Col>
                        <Col xs={6} md={1}>
                        Alices Preferences
                        </Col>
                        <Col xs={6} md={1}>
                        Bob Preferences
                        </Col>
                        <Col xs={6} md={1}>
                        Claire Preferences
                        </Col>
                        <Col xs={6} md={1}>
                        </Col>
                      </Row>

                      <hr/>

                      <Row>
                        <Col xs={6} md={2}>
                        Gold Ring
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={6} md={2}>
                        Diamond Ring
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={6} md={2}>
                        Pearl Necklace
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={6} md={2}>
                        Ruby Earring
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={6} md={2}>
                        Gold Watch
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={6} md={2}>
                        Silver Bracelet
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <CheckBox label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>
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
