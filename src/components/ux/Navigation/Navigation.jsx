import { Link, useHref } from 'react-router-dom';
import LogoWithText from '../Logo/LogoWithText';
import SearchIcon from '../Icons/SearchIcon';
import HeartIcon from '../Icons/HeartIcon';
import AvatarIcon from '../Icons/AvatarIcon';
import ShoppingIcon from '../Icons/ShoppingIcon';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/shop',
    name: 'Shop',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

const Navigation = () => {
  const href = useHref();

  return (
    <nav {...{ className: styles.navigation }}>
      <div {...{ className: styles.navigation__burger }}></div>
      <div {...{ className: styles.navigation__logo }}>
        <Link {...{ to: '/' }}>
          <LogoWithText />
        </Link>
      </div>
      <ul {...{ className: styles.navigation__links }}>
        {links.map((link) => {
          return (
            <li
              {...{ className: cx(styles.navigation__link, { 'navigation__link-active': link.path === href }) }}
              key={link.name}
            >
              <Link {...{ to: link.path }}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <ul {...{ className: styles.navigation__icons }}>
        <li {...{ className: styles.navigation__icon }}>
          <Link {...{ to: '/search' }}>
            <SearchIcon />
          </Link>
        </li>
        <li {...{ className: styles.navigation__icon }}>
          <Link {...{ to: '/profile' }}>
            <AvatarIcon />
          </Link>
        </li>
        <li {...{ className: styles.navigation__icon }}>
          <Link {...{ to: '/favorite' }}>
            <HeartIcon />
          </Link>
        </li>
        <li {...{ className: cx(styles.navigation__icon, styles.navigation__shopping) }}>
          <Link {...{ to: '/shopping' }}>
            <ShoppingIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
