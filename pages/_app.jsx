import Provider from '../context/Provider';

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component { ...pageProps } />
    </Provider>
  );
}

export default App;
