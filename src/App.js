import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'

let marked = require("marked");

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div>
          <Form.Group controlId="formControlsTextarea">
            <Form.Label>Markdown Input</Form.Label>
            <Form.Control componentClass="textarea" placeholder="Enter Markdown"></Form.Control>
          </Form.Group>
        </div>
      </div>
    );
  }
}

export default App;