import { useState } from 'react';
import IconSearch from '../../icons/search.svg';
import IconChevron from '../../icons/chevron-down.svg';

function Search({ name, setName, setRegion }) {
  const [open, setOpen] = useState(false);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <form
      className="search"
      onSubmit={ (event) => event.preventDefault() }
    >
      <div className="search__input-container">
        <span className="search__icon-search">
          <IconSearch />
        </span>

        <input
          className="search__item search__input"
          type="text"
          onChange={ ({ target }) => {
            setRegion('');
            setName(target.value);
          } }
          value={ name }
          placeholder="Search for a country..."
        />
      </div>

      <div className="search__select-container">
        <button
          type="button"
          className="search__item search__select"
          onClick={ () => setOpen(!open) }
        >
          Filter by Region
          <span className="search__icon-chevron">
            <IconChevron />
          </span>
        </button>

        <ul
          className={ `search__item search__regions ${open
            ? 'search__regions--open' : ''}` }
        >
          {regions.map((region) => (
            <li key={ region }>
              <button
                className="search__region"
                type="button"
                onClick={ () => {
                  setOpen(false);
                  setName('');
                  setRegion(region);
                } }
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Search;
