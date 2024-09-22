import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Navigation from '../Navigation/Navigation';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header {...{ className: styles.header }}>
      <div {...{ className: styles.header__wrapper }}>
        <div {...{ className: styles.header__navigation }}>
          <div {...{ className: cx('container') }}>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
