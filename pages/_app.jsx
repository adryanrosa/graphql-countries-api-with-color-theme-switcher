import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import '../css/main.css';
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />

        <title>GraphQL Countries API with color theme switcher</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextNprogress
        color="#2D7DD2"
        startPosition={ 0.3 }
        stopDelayMs={ 200 }
        height={ 3 }
        showOnShallow
      />
      <Header />
      <Component { ...pageProps } />
    </ThemeProvider>
  );
}

export default App;
