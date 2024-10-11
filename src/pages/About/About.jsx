import styles from './style.module.scss';
import classNames from 'classnames/bind';
import CardList from '../../components/ux/CardList/CardList';
import FormLogin from '../../components/ui/Forms/FormLogin/FormLogin';
import { cardItemsAbout, cardItemsTeam } from '../../mock/card';
import { BASE_URL_IMAGE } from '../../constants';

const cx = classNames.bind(styles);

const ITEMS_WORK = [
  {
    title: 'Product design',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.',
  },
  {
    title: 'Crafted',
    text: 'Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.',
  },
  {
    title: 'Sell product',
    text: 'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.',
  },
];

const About = () => {
  return (
    <div {...{ className: cx('container') }}>
      <section {...{ className: styles.section }}>
        <CardList
          {...{
            title: 'About Moon',
            subtitle: `Moon's handmade ceramic products have been around since 1650, let's explore our journey`,
            data: cardItemsAbout,
          }}
        />
      </section>
      <section {...{ className: styles.section }}>
        <div {...{ className: styles.about__works }}>
          <div {...{ className: styles.about__img }}>
            <img
              {...{
                className: styles.img,
                src: `${BASE_URL_IMAGE}/images/about/about-works.jpg`,
                alt: 'image how works',
              }}
            />
          </div>
          <div {...{ className: styles.about__content }}>
            <div {...{ className: styles.about__content_inner }}>
              <h2 {...{ className: styles.about__title }}>How we works</h2>
              <ul {...{ className: styles.about__list }}>
                {ITEMS_WORK.map((item, idx) => {
                  return (
                    <li {...{ className: styles.about__item }} key={idx}>
                      <h3 {...{ className: styles.about__item_title }}>{item.title}</h3>
                      <p {...{ className: styles.about__item_text }}>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section {...{ className: styles.section }}>
        <CardList {...{ data: cardItemsTeam, title: 'Meet Our Team', v: 'minimal' }} />
      </section>
      <section {...{ className: cx('section', 'login') }}>
        <FormLogin />
      </section>
    </div>
  );
};

export default About;
