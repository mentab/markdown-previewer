import React, { Component } from 'react';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <div>
        <MarkdownEditor />
        <MarkdownPreview />
      </div>
    );
  }
}

export default MarkdownPreviewer;
