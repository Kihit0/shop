import Slider from '../../components/ux/Slider/Slider';
import Logo from '../../components/ux/Logo/Logo';
import Links from '../../components/ux/Links/Links';
import FacebookIcon from '../../components/ux/Icons/Socials/FacebookIcon';
import InstagramIcon from '../../components/ux/Icons/Socials/InstagramIcon';
import LinkedInIcon from '../../components/ux/Icons/Socials/LinkedInIcon';
import TwitterIcon from '../../components/ux/Icons/Socials/TwitterIcon';
import YoutubeIcon from '../../components/ux/Icons/Socials/YoutubeIcon';
import { Link } from 'react-router-dom';
import Title from '../../components/ux/Title/Title';
import Map from '../../components/ux/Map/Map';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { slider } from '../../mock/slider';
import { BASE_ROUTING } from '../../constants/index';

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

const SOCIALS = [
  {
    href: 'https://facebook.com',
    content: <FacebookIcon />,
  },
  {
    href: 'https://x.com',
    content: <TwitterIcon />,
  },
  {
    href: 'https://instagram.com',
    content: <InstagramIcon />,
  },
  {
    href: 'https://linkedin.com',
    content: <LinkedInIcon />,
  },
  {
    href: 'https://youtube.com',
    content: <YoutubeIcon />,
  },
];

const Contact = () => {
  const handleClickLink = (e) => {
    e.preventDefault();
    console.log(e);
    window.open();
  };

  return (
    <div {...{ className: styles.contact }}>
      <div>
        <section>
          <Slider {...{ sliderItems: slider }}>
            <div {...{ className: styles.slider__message }}>
              <div {...{ className: cx(styles.slider__message_wrapper, 'container') }}>
                <div {...{ className: styles.slider__message_content }}>
                  <div {...{ className: styles.slider__logo }}>
                    <Link {...{ to: `${BASE_ROUTING}` }}>
                      <Logo {...{ color: 'var(--color-antique-brass)' }} />
                    </Link>
                  </div>
                  <h1 {...{ className: styles.slider__title }}>CONTACT US</h1>
                  <div {...{ className: styles.slider__btn }}>
                    <h3>Follow us on social media</h3>
                    <Links
                      {...{
                        links: SOCIALS,
                        onClick: handleClickLink,
                        classNameList: styles.slider__list,
                        classNameLink: styles.slider__social,
                      }}
                    />
                  </div>
                </div>
              </div>
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
