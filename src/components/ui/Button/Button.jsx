import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const Button = (props) => {
  const { onClick, light, children } = props;
  return (
    <button {...{ className: cx(styles.button, styles.button__default, { button__light: light }), onClick: onClick }}>
      {children}
    </button>
  );
};

export default Button;
