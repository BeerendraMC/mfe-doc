import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getHeaderIdFromInnerText } from '../utils/utility-functions';
import CodeBlock from './CodeBlock';

const Documentation = ({ markdownFiles }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const data = await Promise.all(
        markdownFiles.map((file) => fetch(file).then((res) => res.text()))
      ).catch((err) => console.error(err));
      setMarkdown(data.join(''));
    };
    fetchMarkdown();
  });

  return (
    <div className="documentation">
      <ReactMarkdown
        children={markdown}
        components={{
          h1: ({ node, ...props }) => (
            <h1 id={getHeaderIdFromInnerText(props.children[0])} {...props}>
              {props.children}
            </h1>
          ),
          code: CodeBlock,
        }}
      />
    </div>
  );
};

export default Documentation;
