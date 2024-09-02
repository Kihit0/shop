import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Navigation from '../Navigation/Navigation';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header {...{ className: cx(styles.header, 'container') }}>
      <div {...{ className: styles.header__wrapper }}>
        <div {...{ className: styles.header__navigation }}>
          <Navigation />
        </div>
        <div {...{ className: styles.header__slider }}>
          <div {...{ className: styles.header__content }}></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
