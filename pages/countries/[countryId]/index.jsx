/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import Link from 'next/link';
import { request, gql } from 'graphql-request';

import DescriptionListItem from '../../../src/components/DescriptionListItem';
import Button from '../../../src/UI/Button';
import IconArrow from '../../../public/icons/arrow-left.svg';

function Details({ country: { node } }) {
  const { flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = node;

  return (
    <main className="main details">
      <div className="container">
        <Link href="/">
          <div>
            <Button type="button">
              <div className="button__icon-arrow">
                <IconArrow />
              </div>
              Back
            </Button>
          </div>
        </Link>

        <div className="details__grid">
          <div className="details__image-container">
            <img src={ flag } alt="" />
          </div>

          <div className="details__text-container">
            <h2>{name}</h2>

            <div className="details__description-list">
              <dl>
                <DescriptionListItem title="Native Name" description={ nativeName } />
                <DescriptionListItem title="Population" description={ population.toLocaleString() } />
                <DescriptionListItem title="Region" description={ region } />
                <DescriptionListItem title="Sub Region" description={ subregion } />
                <DescriptionListItem title="Capital" description={ capital } />
              </dl>

              <dl>
                <DescriptionListItem title="Top Level Domain" description={ topLevelDomain[0] } />
                <DescriptionListItem title="Currencies" description={ currencies.edges } />
                <DescriptionListItem title="Languages" description={ languages.edges } />
              </dl>
            </div>

            {
              borders.length > 0
                ? (
                  <ul className="details__borders">
                    <span className="details__borders__title">Border Countries:</span>
                    {
                      borders.map((item) => (
                        <li key={ item }>
                          <Link href={ `/countries/${item}` }>
                            <div>
                              <Button type="button">{item}</Button>
                            </div>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                )
                : (
                  <dl>
                    <DescriptionListItem title="Borders" />
                  </dl>
                )
            }

          </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps({ query: { countryId } }) {
  const queryReq = gql`
  {
    countries(alpha3Code: "${countryId}") {
      edges {
        node {
          name
          capital
          region
          subregion
          population
          borders
          topLevelDomain
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
  const data = await request(url, queryReq);

  return {
    props: { country: data.countries.edges[0] },
  };
}

export default Details;
