import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';

let marked = require("marked");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <div>Markdown Input</div>
            <FormControl componentClass="textarea" placeholder="Enter< Markdown"></FormControl>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default App;