import React from 'react';
import { FormGroup, Label, Input, Jumbotron } from 'reactstrap';

const MarkdownEditor = (props) => {
    const text = props.text;
    const change = props.change;
    return (
        <Jumbotron>
            <FormGroup>
                <Label for="editor">
                    Enter Github flavored markdown here :
            </Label>
                <Input type="textarea"
                    name="editor"
                    id="editor"
                    rows="20"
                    onChange={change}
                    defaultValue={text} />
            </FormGroup>
        </Jumbotron>
    );
};

export default MarkdownEditor;