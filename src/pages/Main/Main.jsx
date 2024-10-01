import styles from './style.module.scss';
import Slider from '../../components/ux/Slider/Slider';
import Logo from '../../components/ux/Logo/Logo';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import CardList from '../../components/ux/CardList/CardList';
import { slider } from '../../mock/slider';
import {
  cardItemsBestSellers,
  cardItemsBlog,
  cardItemsDiscover,
  cardItemsHistory,
  cardItemsMinimal,
  cardItemDiscount,
} from '../../mock/card';
import FromLogin from '../../components/ui/Forms/FormLogin/FormLogin';

const cx = classNames.bind(styles);

const section = [
  {
    data: cardItemsMinimal,
    v: 'minimal',
  },
  {
    data: cardItemDiscount,
  },
  {
    data: cardItemsBestSellers,
    title: 'Best sellers',
    v: 'v1',
  },
  {
    data: cardItemsHistory,
  },
  {
    data: cardItemsDiscover,
    title: 'Discover new arrivals',
    v: 'v1',
  },
  {
    data: cardItemsBlog,
    title: 'Our blog',
  },
];

const Main = () => {
  return (
    <>
      <section {...{ className: styles.slider }}>
        <Slider {...{ sliderItems: slider }}>
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
      </section>
      <div {...{ className: cx(styles.main__content, 'container') }}>
        {section.map((item, idx) => {
          return (
            <section {...{ className: cx('section') }} key={idx}>
              <CardList {...{ ...item }} />
            </section>
          );
        })}
        <section {...{ className: styles.section__form }}>
          <FromLogin />
        </section>
      </div>
    </>
  );
};

export default Main;
