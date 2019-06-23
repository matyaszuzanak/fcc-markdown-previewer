import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className="container">
          <div className="left">
            <textarea id="editor" />
          </div>
          <div className="right">
            <div id="preview" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;