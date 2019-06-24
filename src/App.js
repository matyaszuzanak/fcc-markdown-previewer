import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: initialMarkdown
    }
  }

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className="container">
          <div className="left">
            <textarea id="editor" />
          </div>
          <div className="right">
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;