import Head from 'next/head';

import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>GraphQL Countries API with color theme switcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
