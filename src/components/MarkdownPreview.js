import PropTypes from 'prop-types';
import React from 'react';
import { Jumbotron } from 'reactstrap';

const MarkdownPreview = (props) => {
	const htmlText = props.htmlText;
	return (
		<Jumbotron className="h-100">
			<p>See the parsed result here :</p>
			<section id="preview"
				dangerouslySetInnerHTML={htmlText} />
		</Jumbotron>
	);
};

MarkdownPreview.propTypes = {
	htmlText: PropTypes.object
}

export default MarkdownPreview;