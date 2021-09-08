import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../css/main.css';
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />

        <title>GraphQL Countries API with color theme switcher</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Component { ...pageProps } />
    </ThemeProvider>
  );
}

export default App;
