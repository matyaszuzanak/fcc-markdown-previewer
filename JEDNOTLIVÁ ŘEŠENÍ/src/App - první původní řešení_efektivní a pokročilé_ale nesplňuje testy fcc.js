import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'

let marked = require("marked");

class App extends Component {

  state = {
    markdown: ""
  }

  updateMarkdown = function (markdown) {
    this.setState({ markdown });
  }

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div id="preview">
          <textarea id="editor"></textarea>
        </div>
        <div>
          <Form.Group controlId="formControlsTextarea">
            <Form.Label>Markdown Input</Form.Label>
            <Form.Control componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></Form.Control>
          </Form.Group>
        </div>
        <div>
          <h3>Markdown Output</h3>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}>

          </div>
        </div>
      </div>
    );
  }
}

export default App;