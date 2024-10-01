import Card from '../Card/Card';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CardList = (props) => {
  const { data, title, v } = props;

  if (!data) return;

  return (
    <>
      {title && (
        <div {...{ className: styles.list__title }}>
          <h2>{title}</h2>
        </div>
      )}
      <div
        {...{
          className: cx(styles.list__items, { 'list__items-minimal': v === 'minimal', 'list__items-v1': v === 'v1' }),
        }}
      >
        {data.map((item, idx) => {
          return (
            <div
              {...{
                className: cx(styles.list__item, {
                  'list__item-minimal': v === 'minimal',
                  'list__item-v1': v === 'v1',
                }),
              }}
              key={idx}
            >
              <Card
                {...{
                  cardData: { ...item, id: idx },
                  v,
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
