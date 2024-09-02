import classNames from 'classnames/bind';
import styles from './style.module.scss';
import LogoWithText from '../Logo/LogoWithText';
import Button from '../../ui/Button/Button';
import ArrowNextIcon from '../Icons/ArrowNextIcon';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer {...{ className: styles.footer }}>
      <div {...{ className: cx(styles.footer__wrapper, 'container') }}>
        <div {...{ className: styles.footer__content }}>
          <div {...{ className: styles.footer__grid }}>
            <div {...{ className: styles.footer__logo }}>
              <LogoWithText {...{ color: 'var(--color-mercury)' }} />
            </div>
            <div {...{ className: styles.footer__text }}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus hic praesentium quisquam harum fuga
                corrupti cumque! Modi, minus sequi nihil laudantium consectetur deserunt saepe? Provident, ipsam quos!
                Dolor, officiis magnam!
              </p>
            </div>
            <div {...{ className: styles.footer__button }}>
              <Button {...{ light: true }}>
                <span {...{ className: styles.footer__button_content }}>
                  Get started{' '}
                  <span {...{ className: styles.footer__button_icon }}>
                    <ArrowNextIcon />
                  </span>
                </span>
              </Button>
            </div>
          </div>
          <div {...{ className: styles.footer__links }}>
            {links.map((link, idx) => {
              return (
                <div {...{ className: styles.footer__items }} key={idx}>
                  <h3 {...{ className: styles.footer__title }}>{link.title}</h3>
                  <ul {...{ className: styles.footer__list }}>
                    {link.items.map((item, index) => {
                      return (
                        <li {...{ className: styles.footer__item }} key={index}>
                          <Link {...{ to: item.path }}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div {...{ className: styles.footer__copyright }}>
          <p {...{ className: styles.footer__copyright_text }}>Copyright © 2023 Moon</p>
          <p {...{ className: styles.footer__copyright_text }}>All Rights Reserved</p>
          <a {...{ className: styles.footer__copyright_link, href: '#' }}>Terms and Conditions</a>
          <a {...{ className: styles.footer__copyright_link, href: '#' }}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    title: 'About us',
    items: [
      {
        path: '',
        name: 'Mission',
      },
      {
        path: '',
        name: 'Our team',
      },
      {
        path: '',
        name: 'Awards',
      },
      {
        path: '',
        name: 'Testimonials',
      },
      {
        path: '',
        name: 'Privacy policy',
      },
    ],
  },
  {
    title: 'Services',
    items: [
      {
        path: '',
        name: 'Web design',
      },
      {
        path: '',
        name: 'Web development',
      },
      {
        path: '',
        name: 'Mobile design',
      },
      {
        path: '',
        name: 'UI/UX design',
      },
      {
        path: '',
        name: 'Branding design',
      },
    ],
  },
  {
    title: 'Portfolio',
    items: [
      {
        path: '',
        name: 'Corporate websites',
      },
      {
        path: '',
        name: 'E-commerce',
      },
      {
        path: '',
        name: 'Mobile apps',
      },
      {
        path: '',
        name: 'Landing pages',
      },
      {
        path: '',
        name: 'UI/UX projects',
      },
    ],
  },
];
