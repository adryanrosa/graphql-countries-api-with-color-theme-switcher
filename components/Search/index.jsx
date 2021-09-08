/* eslint-disable react/jsx-max-depth */
import IconSearch from '../../icons/search.svg';
import IconChevron from '../../icons/chevron-down.svg';

function Search({ open, setOpen, name, setName, setRegion }) {
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

        <div
          className={ `search__item search__regions ${open
            ? 'search__regions--open' : ''}` }
        >
          <ul>
            {regions.map((region) => (
              <li key={ region }>
                <button
                  className="search__region"
                  type="button"
                  onClick={ () => {
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
      </div>
    </form>
  );
}

export default Search;
