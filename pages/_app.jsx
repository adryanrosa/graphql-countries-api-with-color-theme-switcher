import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('testando');
  }, []);
  
  return <Component { ...pageProps } />;
}

export default MyApp;
