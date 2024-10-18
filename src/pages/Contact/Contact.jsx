import Slider from '../../components/ux/Slider/Slider';
import Title from '../../components/ux/Title/Title';
import Map from '../../components/ux/Map/Map';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { slider } from '../../mock/slider';

const cx = classNames.bind(styles);

const CONTACT = [
  {
    title: 'Office Hours :',
    content: 'Monday - Friday  8:00 am to 5:00 pm',
  },
  {
    title: 'Email :',
    content: <a {...{ href: 'mailto:example@example@com' }}>contact@company.com</a>,
  },
  {
    title: 'Phone :',
    content: <a {...{ href: 'tel:+79000000000' }}>+7 (900) 000 00-00</a>,
  },
  {
    title: 'Location :',
    content: (
      <>
        <p>59 Middle Point Rd</p>
        <p>San Francisco, 80412</p>
      </>
    ),
  },
];

const Contact = () => {
  return (
    <div {...{ className: styles.contact }}>
      <div>
        <section>
          <Slider {...{ sliderItems: slider }}>
            <div {...{ className: styles.slider }}>
              <div {...{ className: cx('container') }}>User</div>
            </div>
          </Slider>
        </section>
        <div {...{ className: cx('container') }}>
          <section>
            <div {...{ className: styles.contact__content }}>
              <div {...{ className: styles.contact__title }}>
                <Title
                  {...{
                    title: 'Get in touch with us',
                    subtitle:
                      'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.',
                  }}
                />
              </div>
              <div {...{ className: styles.contact__info }}>
                <ul {...{ className: styles.contact__list }}>
                  {CONTACT.map((item, idx) => {
                    return (
                      <li {...{ className: styles.contact__item }} key={idx}>
                        <h3 {...{ className: styles.contact__item_title }}>{item.title}</h3>
                        <div {...{ className: styles.contact__item_text }}>{item.content}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section {...{ className: cx('section__map') }}>
        <Map />
      </section>
    </div>
  );
};

export default Contact;
