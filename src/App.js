import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ButtonMenu from './Components/ButtonMenu';
injectTapEventPlugin();
import './App.css';

class App extends Component {
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
                  <Col xs={12} md={8}>
                    <h4>Division Algorithms for Goods</h4>
                    <p> Some Text </p>
                  </Col>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>

                <Row className="show-grid">
                  <Col xs={12} md={6}>
                    <h4>Fairness Properties</h4>
                    <p> Some Text </p>
                    <ButtonMenu label={"Utility"}/>
                    <br/>
                    <ButtonMenu label={"Utilitarian"}/>
                    <br/>
                    <ButtonMenu label={"Maximin"}/>
                    <br/>
                    <ButtonMenu label={"Envy-Freeness"}/>
                  </Col>
                  <Col xs={6} md={6}>
                    <h4>Results</h4>
                    <p> Some Text </p>
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
                        Item 1
                        </Col>
                        <Col xs={6} md={1}>
                        <ButtonMenu label={"123"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <ButtonMenu label={"234"}/>
                        </Col>
                        <Col xs={6} md={1}>
                        <ButtonMenu label={"523"}/>
                        </Col>
                        <Col xs={6} md={1}>

                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} md={2}>
                        a
                        </Col>
                        <Col xs={6} md={1}>
                        b
                        </Col>
                        <Col xs={6} md={1}>
                        c
                        </Col>
                        <Col xs={6} md={1}>
                        e
                        </Col>
                        <Col xs={6} md={1}>

                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} md={2}>
                        a
                        </Col>
                        <Col xs={6} md={1}>
                        b
                        </Col>
                        <Col xs={6} md={1}>
                        c
                        </Col>
                        <Col xs={6} md={1}>
                        e
                        </Col>
                        <Col xs={6} md={1}>

                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} md={2}>
                        a
                        </Col>
                        <Col xs={6} md={1}>
                        b
                        </Col>
                        <Col xs={6} md={1}>
                        c
                        </Col>
                        <Col xs={6} md={1}>
                        e
                        </Col>
                        <Col xs={6} md={1}>

                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} md={2}>
                        a
                        </Col>
                        <Col xs={6} md={1}>
                        b
                        </Col>
                        <Col xs={6} md={1}>
                        c
                        </Col>
                        <Col xs={6} md={1}>
                        e
                        </Col>
                        <Col xs={6} md={1}>
                        
                        </Col>
                      </Row>
                    </Grid>
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
                <br/>
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
