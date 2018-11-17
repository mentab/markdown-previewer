import React from 'react';
import { Jumbotron } from 'reactstrap';

const MarkdownPreview = (props) => {
    const htmlText = props.htmlText;
    return (
        <Jumbotron>
            <p>See the parsed result here :</p>
            <section id="preview"
                dangerouslySetInnerHTML={htmlText} />
        </Jumbotron>
    );
};

export default MarkdownPreview;