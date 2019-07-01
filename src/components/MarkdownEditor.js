import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label, Input, Jumbotron } from 'reactstrap';

const MarkdownEditor = (props) => {
	const { text, change } = props;
	return (
		<Jumbotron className="h-100">
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

MarkdownEditor.propTypes = {
	text: PropTypes.string,
	change: PropTypes.func
}

export default MarkdownEditor;