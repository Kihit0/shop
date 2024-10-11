import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Button from '../../ui/Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Card = (props) => {
  const { v = 'v2', cardData } = props;

  const minimalCard = ({ image, title, id, subtitle }) => {
    return (
      <>
        <div {...{ className: cx(styles.card__img, 'card__img-minimal') }}>
          <img {...{ src: image, alt: `card image ${id}` }} />
        </div>
        <h2 {...{ className: cx(styles.card__title, 'card__title-minimal') }}>{title}</h2>
        <p {...{ className: cx(styles.card__subtitle, 'card__subtitle-minimal') }}>{subtitle}</p>
      </>
    );
  };

  const renderButton = ({ btnContent }) => {
    if (btnContent) return;

    return v === 'v2' ? (
      <Link {...{ className: styles.card__link, to: cardData?.href || '/shop' }}>{cardData?.btnContent || ''}</Link>
    ) : (
      <div {...{ className: cx(styles.card__btn) }}>
        <Button>Add to card</Button>
      </div>
    );
  };

  return (
    <>
      <div
        {...{
          className: cx(styles.card__content, {
            'card__content-v1': v === 'v1',
            'card__content-minimal': v === 'minimal',
            'card__content-row': v === 'v2' && cardData.id % 2 === 1,
          }),
        }}
      >
        {v === 'minimal' ? (
          minimalCard(cardData)
        ) : (
          <>
            <div {...{ className: cx(styles.card__img, { 'card__img-v1': v === 'v1' }) }}>
              <img {...{ src: cardData.image, alt: `card image S${cardData.id}` }} />
            </div>
            <div {...{ className: cx(styles.card__info, { 'card__info-v1': v === 'v1' }) }}>
              <div {...{ className: cx({ card__info_inner: v === 'v2' }) }}>
                {cardData?.uptitle && <p {...{ className: styles.card__uptitle }}>{cardData.uptitle}</p>}
                <h2 {...{ className: cx(styles.card__title, { 'card__title-v1': v === 'v1' }) }}>{cardData.title}</h2>
                {cardData?.price && <p {...{ className: cx(styles.card__price) }}>{cardData.price}</p>}
                <p {...{ className: cx(styles.card__subtitle, { 'card__subtitle-v1': v === 'v1' }) }}>
                  {cardData.subtitle}
                </p>
                {renderButton(cardData)}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
