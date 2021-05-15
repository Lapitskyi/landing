import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import AuthLinks from './components/AuthLinks';

import './scss/Auth.scss';

const Reset = ({
  t,
  reset: {
    input,
    name,
    link
  }
}) => {
  const validationSchema = yup.object({
    email: yup.string()
      .email('Invalid email address')
      .required('Required'),

  });
  return (
    <div className="reset auth">
      <div className="auth__inner">

        <ButtonClose />

        <h2 className="auth__title">{t(`${name}`)}</h2>

        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validateOnBlur
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty
          }) => (

            <form className="auth__form">
              {input.map((inputItem) => (
                <label className="auth__form-label" htmlFor={inputItem.id} key={inputItem.id}>
                  {t(`${inputItem.label}`)}
                  <input
                    className="auth__form-input"
                    type={inputItem.type}
                    name={inputItem.id}
                    id={inputItem.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[`${inputItem.id}`]}
                    placeholder={t(`${inputItem.placeholder}`)}
                  />
                  {touched[`${inputItem.id}`] && errors[`${inputItem.id}`]
                  && <div className="error">{errors[`${inputItem.id}`]}</div>}
                </label>
              ))}

              <ButtonForm
                name={t(`${name}`)}
                addDisabled={!isValid && !dirty}
                addOnClick={handleSubmit}
              />
            </form>
          )}
        </Formik>
        <AuthLinks link={link} t={t} />
      </div>
    </div>
  );
};
Reset.defaultProps = {
  t: {},
  reset: {
    input: [],
    name: '',
    link: []
  }

};
Reset.propTypes = {
  t: PropTypes.func,
  reset: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    link: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Reset;
