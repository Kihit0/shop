import styles from './style.module.scss';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Slider = (props) => {
  const { children, sliderItems } = props;

  if (!sliderItems) return;

  return (
    <div {...{ className: styles.slider }}>
      <div {...{ className: styles.slider__wrapper }}>
        <div {...{ className: styles.slider__content }}>
          <Swiper
            {...{
              modules: [Autoplay],
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              speed: 500,
              effect: 'fade',
              style: {
                height: 'inherit',
              },
            }}
          >
            {sliderItems.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img {...{ src: item.image, alt: `slider img ${idx}` }} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slider;
