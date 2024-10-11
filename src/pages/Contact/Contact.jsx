import classNames from 'classnames/bind';
import Map from '../../components/ux/Map/Map';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <div {...{ className: styles.contact }}>
      <div>Contact</div>
      <section {...{ className: cx('section__map') }}>
        <Map />
      </section>
    </div>
  );
};

export default Contact;
