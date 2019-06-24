import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://www.freecodecamp.org)

[MyGithubAccount](https://github.com/matyaszuzanak "My Github Account")

### Text Decorations

*italic*

**bold**

***italic and bold***

### Image

![React logo](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png "React logo")

### Blockquote

> "Whether you think you can or you can't, either way you are right." -- Henry Ford

## Code

\`npm install create-react-app\`

### Function

\`\`\`
function multiplyByTwo(a) {
  return a *= 2 
}
\`\`\`
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: initialMarkdown
    }
  }

  handleChange = e => this.setState({ markdown: e.target.value })

  render() {
    return (
      <div>
        <h1 id="top-header">Markdown Previewer</h1>
        <div className="box">
          <div className="left">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}/>
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