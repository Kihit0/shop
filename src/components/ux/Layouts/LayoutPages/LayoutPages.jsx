import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from './style.module.scss';

const LayoutPages = (props) => {
  const { children } = props;

  return (
    <div {...{ className: styles.block }}>
      <div {...{ className: styles.content }}>
        <div {...{ className: styles.header }}>
          <Header />
        </div>
        <main {...{ className: styles.main }}>{children}</main>
      </div>
      <div {...{ className: styles.footer }}>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPages;
