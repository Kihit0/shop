import React from 'react';
import { Link, useHref } from 'react-router-dom';
import LogoWithText from '../Logo/LogoWithText';
import SearchIcon from '../Icons/SearchIcon';
import HeartIcon from '../Icons/HeartIcon';
import AvatarIcon from '../Icons/AvatarIcon';
import ShoppingIcon from '../Icons/ShoppingIcon';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import Links from '../Links/Links';

const cx = classNames.bind(styles);

const links = [
  {
    href: '/',
    content: 'Home',
  },
  {
    href: '/shop',
    content: 'Shop',
  },
  {
    href: '/about',
    content: 'About',
  },
  {
    href: '/contact',
    content: 'Contact',
  },
];

const iconsLinks = [
  {
    href: '/search',
    content: <SearchIcon />,
  },
  {
    href: '/profile',
    content: <AvatarIcon />,
  },
  {
    href: '/favorite',
    content: <HeartIcon />,
  },
  {
    href: '/shopping',
    content: <ShoppingIcon />,
  },
];

const Navigation = () => {
  const href = useHref();
  const [isShowBurger, setIsShowBurger] = React.useState(false);

  React.useEffect(() => {
    const hidden = () => {
      document.getElementsByTagName('body')[0].classList.add('hidden');
    };

    isShowBurger && hidden();

    return () => {
      document.getElementsByTagName('body')[0].classList.remove('hidden');
    };
  }, [isShowBurger]);

  return (
    <nav {...{ className: styles.navigation }}>
      <div {...{ className: styles.navigation__burger, onClick: () => setIsShowBurger(true) }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3.10352H18" stroke="#595667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 16.8965H18" stroke="#595667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 10H18" stroke="#595667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div {...{ className: styles.navigation__logo }}>
        <Link {...{ to: '/' }}>
          <LogoWithText />
        </Link>
      </div>
      <div>
        <Links
          {...{
            links,
            activeItem: links.find((link) => link.href === href),
            classNameList: cx(styles.navigation__links, { 'navigation__links-burger': isShowBurger }),
            classNameLink: styles.navigation__link,
            classActive: cx('navigation__link-active'),
          }}
        />
        <div
          {...{
            className: cx(styles.navigation__close, { 'navigation__close-active': isShowBurger }),
            onClick: () => setIsShowBurger(false),
          }}
        >
          <span {...{ className: styles.navigation__close_line }}></span>
          <span {...{ className: styles.navigation__close_line }}></span>
        </div>
      </div>

      <Links
        {...{
          links: iconsLinks,
          classNameList: styles.navigation__icons,
          classNameLink: styles.navigation__icon,
        }}
      />
    </nav>
  );
};

export default Navigation;
