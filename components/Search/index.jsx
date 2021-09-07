/* eslint-disable react/jsx-max-depth */
import IconSearch from '../../icons/search.svg';
import IconChevron from '../../icons/chevron-down.svg';

function Search({ open, setOpen, name, setName, setRegion }) {
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

      <button
        type="button"
        className="search__item search__select"
        onClick={ () => setOpen(!open) }
      >
        Filter by Region
        <span className="search__icon-chevron">
          <IconChevron />
        </span>

        <div
          className={ `search__item search__regions ${open
            ? 'search__regions--open' : ''}` }
        >
          <ul>
            <li>
              <button
                className="search__region"
                type="button"
                onClick={ () => {
                  setName('');
                  setRegion('Africa');
                } }
              >
                Africa
              </button>
            </li>
            <li>
              <button
                className="search__region"
                type="button"
                onClick={ () => {
                  setName('');
                  setRegion('Americas');
                } }
              >
                Americas
              </button>
            </li>
            <li>
              <button
                className="search__region"
                type="button"
                onClick={ () => {
                  setName('');
                  setRegion('Asia');
                } }
              >
                Asia
              </button>
            </li>
            <li>
              <button
                className="search__region"
                type="button"
                onClick={ () => {
                  setName('');
                  setRegion('Europe');
                } }
              >
                Europe
              </button>
            </li>
            <li>
              <button
                className="search__region"
                type="button"
                onClick={ () => {
                  setName('');
                  setRegion('Oceania');
                } }
              >
                Oceania
              </button>
            </li>
          </ul>
        </div>
      </button>
    </form>
  );
}

export default Search;
