import React from 'react';

const MarkdownPreview = (props) => {
    const text = props.text;
    return (
        <section id="preview">{text}</section>
    );
};

export default MarkdownPreview;