import styles from './style.module.scss';

const Title = (props) => {
  const { title = '', subtitle = '' } = props;

  return (
    <>
      <h2 {...{ className: styles.title }}>{title}</h2>
      <div {...{ className: styles.center }}>
        <p {...{ className: styles.subtitle }}>{subtitle}</p>
      </div>
    </>
  );
};

export default Title;
