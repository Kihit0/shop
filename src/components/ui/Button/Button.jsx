import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const Button = (props) => {
  const { onClick, light, children, elementButton, ...rest } = props;
  return (
    <button
      {...{
        className: cx(styles.button, styles.button__default, {
          button__light: light,
          [`button__${elementButton}`]: elementButton,
        }),
        onClick: onClick,
        ...rest,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
