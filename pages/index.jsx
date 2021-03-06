import { useState } from 'react';
import { request, gql } from 'graphql-request';

import Countries from '../src/components/Countries';
import Search from '../src/components/Search';

function Home({ countries }) {
  const [nameSearch, setNameSearch] = useState('');
  const [regionSearch, setRegionSearch] = useState('');

  return (
    <main className="main">
      <div className="container">
        <Search
          name={ nameSearch }
          setName={ setNameSearch }
          setRegion={ setRegionSearch }
        />

        <Countries
          countries={ countries
            .filter(({ node: { name, nativeName } }) => (
              name.toLocaleLowerCase()
                .includes(nameSearch.toLocaleLowerCase())
                || nativeName.toLocaleLowerCase()
                  .includes(nameSearch.toLocaleLowerCase())))

            .filter(({ node: { region } }) => (
              region.toLocaleLowerCase()
                .includes(regionSearch.toLocaleLowerCase())
            )) }
        />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const query = gql`
  {
    countries {
      edges {
        node {
          alpha3Code
          flag
          name
          nativeName
          population
          region
          capital
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
