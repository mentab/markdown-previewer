import React, { Component } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';
import marked from 'marked';
import { Container, Row, Col } from 'reactstrap';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    const onloadStr = `# Markdown Previewer\n## A markdown previewer\n[link to the exercise](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer/)\n
\`\`\`javascript
import marked from 'marked';
getMarkdown(text) {
  const markedText = marked(text, { sanitize: true });
  const htmlText = { __html: markedText };
  return htmlText;
}
\`\`\`
* you can parse\n- you may parse\n+ you must parse\n
> Parse it if you want it\n> If you don't want to parse, don't parse\n> If you want to parse, parse\n> If you don't know, or if you don't know what is parsing, parse\n
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Parse plz")\nParse, **parse** or __parse__.

`;
    this.state = {
      text: onloadStr,
      htmlText: this.getMarkdown(onloadStr)
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const textValue = event.target.value;
    this.setState({
      text: textValue,
      htmlText: this.getMarkdown(textValue)
    });
  }

  getMarkdown(text) {
    const markedText = marked(text, { sanitize: true });
    const htmlText = { __html: markedText };
    return htmlText;
  }

  render() {
    const text = this.state.text;
    const htmlText = this.state.htmlText;
    const change = this.handleChange;
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-5">
              Markdown Previewer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs='6'>
            <MarkdownEditor text={text}
              change={change} />
          </Col>
          <Col xs='6'>
            <MarkdownPreview
              htmlText={htmlText} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MarkdownPreviewer;
