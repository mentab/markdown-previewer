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
There is some \`inline code\` here, but it sucks...\n
> Parse it if you want it\n> If you don't want to parse, don't parse\n> If you want to parse, parse\n> If you don't know, or if you don't know what is parsing, parse\n
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Parse plz")\nParse, **parse** or __parse__.

`;
		// Link renderer
		const renderer = new marked.Renderer();

		renderer.link = (href, title, text) => `<a href="${href}" title="${title}" target="_blank">${text}</a>`;

		// Set breaks and new renderer (optional)
		marked.setOptions({
			breaks: true,
			renderer: renderer
		});

		this.state = {
			text: onloadStr,
			htmlText: this.getMarkdown(onloadStr)
		}
	}

	handleChange = (event) => {
		const { value } = event.target;
		this.setState({
			text: value,
			htmlText: this.getMarkdown(value)
		});
	}

	getMarkdown(text) {
		const markedText = marked(text, { sanitize: true });
		const htmlText = { __html: markedText };
		return htmlText;
	}

	render() {
		const { text, htmlText } = this.state;
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