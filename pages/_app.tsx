import React, { FC } from 'react';
import type { AppProps } from 'next/app';
// styles
import 'normalize.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-family: sans-serif;
          margin: 40px auto;
          max-width: 650px;
          line-height: 1.6;
          font-size: 18px;
          color: #444;
          padding: 0 10px;
        }
        h1,
        h2,
        h3 {
          line-height: 1.2;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default App;
