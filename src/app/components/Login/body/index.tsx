import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apple from '../../../images/apple.png';
import google from '../../../images/google.png';
import microsoft from '../../../images/microsoft.png';
import { useAuth } from './hooks';
import style from './style.css';


export const Body = () => {
  const { login } = useAuth();
  const initValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [_data, _setData] = useState('');
  const [checkEmail, _setCheckEmail] = useState('');
  const [validateEmail, setValidateEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit =  (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    if (validateEmail == true && checkPassword == false) {
      login({email: formValues.email, password: formValues.password});

      // axios
      //   .post(url, {
      //     email: formValues.email,
      //     password: formValues.password
      //   })
      //   .then((response: any) => {
      //     setData(response.data.user);
      //     navigate('/chatgpt1');
      //   })
      //   .catch((error) => {
      //     setCheckEmail(error.response.data.message);
      //   });
      // setCheckPassword(true);
      // setValidateEmail(false);
    }
  };

  const validate = (values: any) => {
    const errors = { email: '', password: '' };
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (regex.test(values.email)) {
      setValidateEmail(true);
    } else {
      errors.email = 'Wrong format email';
    }

    if (!formValues.password) {
      setCheckPassword(true);
      errors.password = 'password is required';
    } else {
      setCheckPassword(false);
    }

    return errors;
  };

  return (
    <body>
      <form>
        <div className={style.welcome}>Welcome Back</div>

        <div>
          <input
            type="text"
            className={style.input_address}
            placeholder="Email address"
            value={formValues.email}
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <p className={style.validation_email}>{formErrors.email}</p>

        <div>
          <input
            className={style.input_address}
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        {checkEmail && <p className={style.validation_check_email}>{checkEmail}</p>}
        <p className={style.validation_email}>{formErrors.password}</p>
        <div className={style.continute}>
          <div onClick={handleSubmit} className={style.text}>
            Login
          </div>
        </div>

        <div className={style.signup}>
          Don't have an account? &nbsp;{' '}
          <Link to="/signup" className={style.link_signup}>
            Sign up
          </Link>
        </div>

        <div className={style.horizontal_or}>
          <div className={style.horizontal}></div>
          <div className={style.or}>OR</div>
          <div className={style.horizontal}></div>
        </div>

        <div className={style.button_google}>
          <div className={style.button_img}>
            <img src={google} alt="" />
          </div>
          <div className={style.button_text}>Continue With Google</div>
        </div>

        <div className={style.button_microsoft_apple}>
          <div className={style.button_img}>
            <img src={microsoft} alt="" />
          </div>
          <div className={style.button_text}>Continue With Microsoft</div>
        </div>
        <div className={style.button_microsoft_apple}>
          <div className={style.button_img}>
            <img src={apple} alt="" />
          </div>
          <div className={style.button_text}>Continue With Apple</div>
        </div>
      </form>
    </body>
  );
};
