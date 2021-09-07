/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import Link from 'next/link';

import Context from '../../context';
import IconMoon from '../../icons/moon.svg';
import IconMoonFill from '../../icons/moon-fill.svg';

function Header() {
  const { darkMode, setDarkMode } = useContext(Context);

  return (
    <header className="header">
      <div className="container header__layout">
        <Link href="/">
          <a>
            <h1>Where in the world?</h1>
          </a>
        </Link>

        <button
          className="header__theme-switcher"
          type="button"
          onClick={ () => {
            localStorage.setItem('darkMode', !darkMode);
            setDarkMode(!darkMode);
          } }
        >
          {darkMode ? <IconMoonFill /> : <IconMoon />}
          <span>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
