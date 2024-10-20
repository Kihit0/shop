import styles from './style.module.scss';
import { Formik } from 'formik';
import { validationEmail, validationPhone } from '../../../../helper/validation';
import Input from '../../Input/Input';
import { MASK_PHONE, PLACEHOLDERS } from '../../../../constants';

const initialValues = { name: '', email: '', phone: '', company: '', message: '' };

const validate = (values) => {
  const errors = new Map();

  Object.keys(values).forEach((item) => {
    if (!values[item]) {
      errors.set(item, 'Empty fields');
    }

    if (item === 'email') {
      if (validationEmail(values[item])) {
        errors.set(item, 'Invalid email');
      }
    }

    if (item === 'phone') {
      if (validationPhone(values[item])) {
        errors.set(item, 'Invalid phone');
      }
    }
  });

  return Object.fromEntries(errors);
};

// TODO Feature: e-mailing

const FormContact = () => {
  const handleSubmit = (values, setSubmitting) => {
    console.log(values, setSubmitting);
    return;
  };

  return (
    <Formik
      {...{ initialValues, validate, onSubmit: (values, { setSubmitting }) => handleSubmit(values, setSubmitting) }}
    >
      {({ values, handleChange }) => (
        <form {...{ className: styles.form }}>
          {Object.keys(values).map((item, idx) => {
            if (item === 'phone') {
              var mask = {
                mask: MASK_PHONE,
                maskPlaceholder: ' ',
              };
            }

            return (
              item !== 'message' && (
                <div {...{ className: styles.form__input }} key={idx}>
                  <Input
                    {...{
                      title: item,
                      value: values[item],
                      onChange: handleChange,
                      name: item,
                      placeholder: PLACEHOLDERS[item],
                      error: true,
                      ...mask,
                    }}
                  />
                </div>
              )
            );
          })}
        </form>
      )}
    </Formik>
  );
};

export default FormContact;
