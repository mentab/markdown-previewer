import React, { Component } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '#Kiazdohjnj'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    const text = this.state.text;
    const change = this.handleChange;
    return (
      <div>
        <MarkdownEditor text={text} change={change} />
        <MarkdownPreview text={text} />
      </div>
    );
  }
}

export default MarkdownPreviewer;
