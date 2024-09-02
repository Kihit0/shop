import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const LayoutPages = (props) => {
  const { children } = props;

  return (
    <div {...{ className: styles.block }}>
      <div {...{ className: styles.content }}>
        <div {...{ className: styles.header }}>
          <Header />
        </div>
        <main {...{ className: cx('container', styles.main) }}>{children}</main>
      </div>
      <div {...{ className: styles.footer }}>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPages;
