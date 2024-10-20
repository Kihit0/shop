import React from 'react';
import styles from './style.module.scss';
import ReactInputMask from 'react-input-mask';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = React.forwardRef((props, ref) => {
  const { type = 'text', onChange, value, title, name, mask, placeholder, error } = props;

  return (
    <label {...{ className: styles.label }}>
      <span {...{ className: cx(styles.title, { title__error: error }) }}>{title || ''}</span>
      <ReactInputMask
        {...{
          className: cx(styles.input, { input__error: error }),
          ref,
          type,
          placeholder,
          onChange,
          value,
          name,
          mask,
        }}
      />
    </label>
  );
});

Input.displayName = 'Input';

export default React.memo(Input);
