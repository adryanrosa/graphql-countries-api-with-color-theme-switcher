import Link from 'next/link';

function Country({ country: { numericCode, flag, name, population, region, capital } }) {
  return (
    <div className="card">
      <Link href={ `/countries${numericCode}` }>
        <img src={ flag } alt="" />
      </Link>

      <div className="card__text-container">
        <Link href={ `/countries${numericCode}` }>
          <h3>{name}</h3>
        </Link>

        <dl>
          <div>
            <dt>Population: </dt>
            {' '}
            <dd>{population.toLocaleString()}</dd>
          </div>

          <div>
            <dt>Region:</dt>
            {' '}
            <dd>{region}</dd>
          </div>

          <div>
            <dt>Capital:</dt>
            {' '}
            {capital
              ? <dd>{capital}</dd>
              : <dd>None</dd>}
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Country;
