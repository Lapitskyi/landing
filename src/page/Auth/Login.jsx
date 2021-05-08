import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import AuthLinks from './components/AuthLinks';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import './scss/Auth.scss';
import ButtonForm from '../../components/ButtonForm/ButtonForm';

const Login = ({
  login: {
    input,
    btnText,
    link
  }
}) => {
  const validationSchema = yup.object({
    email: yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: yup.string()
      .min(6, 'Must be at least 6 characters long.')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

  });
  return (
    <div className="login auth">
      <div className="auth__inner">
        <ButtonClose />
        <h2 className="auth__title">{btnText}</h2>
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
                  {inputItem.label}
                  <input
                    className="auth__form-input"
                    type={inputItem.type}
                    name={inputItem.id}
                    id={inputItem.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[`${inputItem.id}`]}
                    placeholder={inputItem.placeholder}
                  />
                  {touched[`${inputItem.id}`] && errors[`${inputItem.id}`]
                  && <div className="error">{errors[`${inputItem.id}`]}</div>}
                </label>
              ))}

              <ButtonForm
                name={btnText}
                addDisabled={!isValid && !dirty}
                addOnClick={handleSubmit}
              />
            </form>
          )}
        </Formik>
        <AuthLinks link={link} />
      </div>
    </div>
  );
};

Login.defaultProps = {
  login: {
    input: [],
    btnText: '',
    link: []
  }
};
Login.propTypes = {
  login: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.object),
    btnText: PropTypes.string,
    link: PropTypes.arrayOf(PropTypes.object)
  })

};

export default Login;
