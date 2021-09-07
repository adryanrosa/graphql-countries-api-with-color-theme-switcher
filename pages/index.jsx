import Head from 'next/head';
import { request, gql } from 'graphql-request';

import Header from '../components/Header';
import Countries from '../components/Countries';

function Home({ countries }) {
  return (
    <>
      <Head>
        <title>GraphQL Countries API with color theme switcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Countries countries={ countries } />
    </>
  );
}

export async function getServerSideProps() {
  const query = gql`
  {
    countries {
      edges {
        node {
          name
          alpha3Code
          capital
          region
          population
          area
          borders
          numericCode
          currencies {
            edges {
              node {
                name
              }
            }
          }
          languages {
            edges {
              node {
                name
              }
            }
          }
          flag
        }
      }
    }
  }  
`;

  const url = 'https://graphql.country/graphql';
  const { countries: { edges } } = await request(url, query);

  return { props: { countries: edges } };
}

export default Home;
