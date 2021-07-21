import React, { FC, useState } from 'react';
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

  return (
    <div className="root">
      <h1>Generate rswag schema from JSON</h1>
      <textarea value={input} onChange={(ev) => setInput(ev.target.value)} rows={20} />
      <button type="button" onClick={generate}>
        generate
      </button>
      <textarea value={output} rows={30} />
      <style jsx>
        {`
          textarea {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
