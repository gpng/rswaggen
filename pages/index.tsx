import React, { FC, useState } from 'react';
import Head from 'next/head';
import generateSchema from 'utils/generate';

const Index: FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const generate = (): void => {
    try {
      const parsed = JSON.parse(input);
      setOutput(generateSchema(parsed));
    } catch (err) {
      window.alert('invalid json');
    }
  };

  const copy = (): void => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="root">
      <Head>
        <title>rswaggen</title>
        <meta name="description" content="Generate Rswag schema from JSON" />
      </Head>
      <h1>Generate Rswag schema from JSON</h1>
      <textarea
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        rows={20}
        placeholder="Input JSON"
      />
      <button type="button" className="btn-generate" onClick={generate}>
        Generate schema
      </button>
      <div className="output-container">
        <textarea value={output} rows={30} readOnly placeholder="Ouput" />
        <button type="button" className="btn-copy" onClick={copy}>
          Copy output
        </button>
      </div>
      <style jsx>
        {`
          textarea {
            width: 100%;
          }

          .btn-generate {
            margin: 0.5em 0;
          }

          .output-container {
            position: relative;
          }

          .btn-copy {
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
