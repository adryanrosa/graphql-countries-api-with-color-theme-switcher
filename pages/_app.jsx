import Provider from '../context/Provider';
import '../css/main.css';

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component { ...pageProps } />
    </Provider>
  );
}

export default App;
