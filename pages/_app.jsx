import Head from 'next/head';

import Provider from '../context/Provider';
import '../css/main.css';

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />

        <title>GraphQL Countries API with color theme switcher</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component { ...pageProps } />
    </Provider>
  );
}

export default App;
