/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';
import IconMoon from '../../../public/icons/moon.svg';
import IconMoonFill from '../../../public/icons/moon-fill.svg';

function Header() {
  const { theme, setTheme } = useTheme();
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
          onClick={ () => setTheme(newTheme) }
        >
          {loaded && (
            theme === 'dark' ? <IconMoonFill /> : <IconMoon />
          )}
          <span>
            {loaded && (
              theme === 'dark' ? 'Light Mode' : 'Dark Mode'
            )}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
