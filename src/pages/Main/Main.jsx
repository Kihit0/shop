import styles from './style.module.scss';
import Slider from '../../components/ux/Slider/Slider';
import Logo from '../../components/ux/Logo/Logo';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const sliderImg = [
  {
    image: 'src/assets/images/header-slider.jpg',
  },
  {
    image: 'src/assets/images/header-slider1.jpg',
  },
  {
    image: 'src/assets/images/header-slider2.jpg',
  },
  {
    image: 'src/assets/images/header-slider3.jpg',
  },
];

const Main = () => {
  return (
    <div {...{ className: styles.main }}>
      <div {...{ className: styles.main__wrapper }}>
        <div {...{ className: styles.slider }}>
          <Slider {...{ sliderItems: sliderImg }}>
            <div {...{ className: styles.slider__message }}>
              <div {...{ className: cx(styles.slider__message_wrapper, 'container') }}>
                <div {...{ className: styles.slider__message_content }}>
                  <div {...{ className: styles.slider__logo }}>
                    <Link {...{ to: '/' }}>
                      <Logo />
                    </Link>
                  </div>
                  <p {...{ className: styles.slider__subtitle }}>Handcrafted in Viet Nam since 1650</p>
                  <h1 {...{ className: styles.slider__title }}>BAT TRANG DINNER SET</h1>
                  <div {...{ className: styles.slider__btn }}>
                    <Link {...{ className: styles.slider__link, to: '/shop' }}>SHOP NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div {...{ className: cx(styles.main__content, 'container') }}>
          <div>content</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
