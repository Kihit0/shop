import styles from './style.module.scss';
import Slider from '../../components/ux/Slider/Slider';
import Logo from '../../components/ux/Logo/Logo';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import CardList from '../../components/ux/CardList/CardList';
import { slider } from '../../mock/slider';
import { cardItemsBestSellers, cardItemsMinimal, cardItemV2Discount } from '../../mock/card';
import Card from '../../components/ux/Card/Card';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div {...{ className: styles.main }}>
      <div {...{ className: styles.main__wrapper }}>
        <div {...{ className: styles.slider }}>
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
        </div>
        <div {...{ className: cx(styles.main__content, 'container') }}>
          <div {...{ className: cx('pb-80') }}>
            <CardList
              {...{
                data: cardItemsMinimal,
                v: 'minimal',
              }}
            />
          </div>
          <div {...{ className: cx('pb-80') }}>
            <Card {...{ cardData: cardItemV2Discount }} />
          </div>
          <div {...{ className: cx('pb-80') }}>
            <CardList {...{ data: cardItemsBestSellers, title: 'Best sellers', v: 'v1' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
