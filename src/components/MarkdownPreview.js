import React from 'react';

const MarkdownPreview = (props) => {
    const htmlText = props.htmlText;
    return (
        <section id="preview"
            dangerouslySetInnerHTML={htmlText}></section>
    );
};

export default MarkdownPreview;