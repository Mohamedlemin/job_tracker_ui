import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm'
import Container from './Container'

const ApiContainer = (props: { code: string }) => {

	const { code } = props
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		let isMounted = true;
		fetch(code).then(res => res.text()).then(
			md => {
				if (isMounted) {
					setMarkdown(md)
				}
			}
		);
		return () => { isMounted = false };
	}, [code]);


	return (
		<Container>
			{markdown && (
				<Markdown
					children={markdown}
					remarkPlugins={[remarkGfm]}
					components={
						{
							h2: h => {
								const title = typeof h.children[0] === 'string' && h.children[0].includes('title: ') ? /title:(.+)/.exec(h.children[0])?.[1] : '';
								const children = typeof h.children[0] === 'string' ? h.children[0] : '';
								return (
									<div className={`api-title h${h.level} ${title ? '' : children.split('').join('').replace(/\s/g, '-').toLowerCase()}`}>
										{title || h.children}
									</div>
								);
							},
							pre: (pre) => {
								const preElement = pre.children[0] as React.ReactElement;
								const props = preElement?.props;
								const match = /language-(\w+)/.exec(props?.className || '') || [];
								let language = '';

								if (match.length > 0) {
									language = match[1];
								}

								return (
									<div className="api-code-highligher">
										<SyntaxHighlighter language={language} style={{
											"hljs": {
												"display": "block",
												"overflowX": "auto",
												"padding": "0.5em",
												"background": "#1E1E1E",
												"color": "#DCDCDC"
											},
											"hljs-keyword": {
												"color": "#569CD6"
											},
											"hljs-literal": {
												"color": "#569CD6"
											},
											"hljs-symbol": {
												"color": "#569CD6"
											},
											"hljs-name": {
												"color": "#569CD6"
											},
											"hljs-link": {
												"color": "#569CD6",
												"textDecoration": "underline"
											},
											"hljs-built_in": {
												"color": "#4EC9B0"
											},
											"hljs-type": {
												"color": "#4EC9B0"
											},
											"hljs-number": {
												"color": "#B8D7A3"
											},
											"hljs-class": {
												"color": "#B8D7A3"
											},
											"hljs-string": {
												"color": "#D69D85"
											},
											"hljs-meta-string": {
												"color": "#D69D85"
											},
											"hljs-regexp": {
												"color": "#9A5334"
											},
											"hljs-template-tag": {
												"color": "#9A5334"
											},
											"hljs-subst": {
												"color": "#DCDCDC"
											},
											"hljs-function": {
												"color": "#DCDCDC"
											},
											"hljs-title": {
												"color": "#DCDCDC"
											},
											"hljs-params": {
												"color": "#DCDCDC"
											},
											"hljs-formula": {
												"color": "#DCDCDC"
											},
											"hljs-comment": {
												"color": "#57A64A",
												"fontStyle": "italic"
											},
											"hljs-quote": {
												"color": "#57A64A",
												"fontStyle": "italic"
											},
											"hljs-doctag": {
												"color": "#608B4E"
											},
											"hljs-meta": {
												"color": "#9B9B9B"
											},
											"hljs-meta-keyword": {
												"color": "#9B9B9B"
											},
											"hljs-tag": {
												"color": "#9B9B9B"
											},
											"hljs-variable": {
												"color": "#BD63C5"
											},
											"hljs-template-variable": {
												"color": "#BD63C5"
											},
											"hljs-attr": {
												"color": "#9CDCFE"
											},
											"hljs-attribute": {
												"color": "#9CDCFE"
											},
											"hljs-builtin-name": {
												"color": "#9CDCFE"
											},
											"hljs-section": {
												"color": "gold"
											},
											"hljs-emphasis": {
												"fontStyle": "italic"
											},
											"hljs-strong": {
												"fontWeight": "bold"
											},
											"hljs-bullet": {
												"color": "#D7BA7D"
											},
											"hljs-selector-tag": {
												"color": "#D7BA7D"
											},
											"hljs-selector-id": {
												"color": "#D7BA7D"
											},
											"hljs-selector-class": {
												"color": "#D7BA7D"
											},
											"hljs-selector-attr": {
												"color": "#D7BA7D"
											},
											"hljs-selector-pseudo": {
												"color": "#D7BA7D"
											},
											"hljs-addition": {
												"backgroundColor": "#144212",
												"display": "inline-block",
												"width": "100%"
											},
											"hljs-deletion": {
												"backgroundColor": "#600",
												"display": "inline-block",
												"width": "100%"
											}
										}}>
											{props.children}
										</SyntaxHighlighter>
									</div>
								)
							}
						}
					}
				/>
			)}
		</Container>
	)
}

export default ApiContainer
