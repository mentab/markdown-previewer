import React from 'react';

const MarkdownEditor = (props) => {
    const text = props.text;
    const change = props.change;
    return (
        <textarea id="editor" onChange={change}>{text}</textarea>
    );
};

export default MarkdownEditor;