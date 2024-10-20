import React from 'react';
import Button from '../../Button/Button';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { validationEmail } from '../../../../helper/validation';

const cx = classNames.bind(styles);

//TODO Feature: redirect on login page

const FromLogin = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);

    if (error) {
      setError(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validationEmail(email)) {
      setError(true);
      return;
    }

    if (error) {
      setError(false);
    }
  };

  return (
    <form {...{ className: styles.login, onSubmit: handleFormSubmit }}>
      <p {...{ className: styles.login__subtitle }}>Sign up for emails</p>
      <h2 {...{ className: styles.login__title }}>For news, collections & more</h2>
      <div {...{ className: styles.login__input_wrapper }}>
        <input
          {...{
            className: cx(styles.login__input, { 'login__input-error': error }),
            type: 'text',
            placeholder: 'Enter your email',
            value: email,
            onChange: handleChange,
          }}
        />
      </div>
      <Button {...{ type: 'submit' }}>Sign up</Button>
    </form>
  );
};

export default FromLogin;
