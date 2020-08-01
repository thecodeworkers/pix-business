import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Logo } from '../../assets/img';
import './styles.scss';
import { Formik } from 'formik';

const Login: FC<RouteComponentProps> = () => {

  const colors: any = [
    { class: '_one_' },
    { class: '_two_' },
    { class: '_three_' },
    { class: '_four_' },
    { class: '_five_' },
    { class: '_six_' },
    { class: '_seven_' }
  ];

  const form: any = {
    email: '',
    password:'',
  }

  return (
    <div className='_mainOne'>
      <div className='_navOne'>
        <div className='_rightContentOne'>
          <div className='_headerOne'>
            <div className='_logotypeOne'>
              <Logo />
            </div>
          </div>
          <div className='_listOne'>

            <h3 className='_title'>Hello! Tell us about your business.</h3>

            <h5 className='_subtitle'>Please let us know your business details.</h5>
          </div>
        </div>

        <div className='_footerOne'>

          <p className='_copyrightOne'> Copyright 2020 The Pix LLC. All rights reserved.</p>
        </div>

      </div>

      <div className='_lineOne'>
        {
          colors.map((res: any, index: any) => (
            <div key={index} className={res.class}></div>
          )
          ).reverse()
        }
      </div>

      <div className='_formGrandFather'>
      <div className='_formSon'>
        <div className='_form'>
          <div>
            <h3 className='_form-title'>Welcome</h3>
          </div>

          <Formik
            initialValues={form}
            onSubmit={values => console.log(values)}
          >
            {({
              values,
              handleSubmit,
              handleChange
            }) => (
              <form onSubmit={handleSubmit}>
                <div className='_form-div-father'>
                  <div className='_form-div'>
                    <h3 className='_form-subtitle'>Username</h3>
                    <input className='_input-half' type="text" name="email" placeholder='Username' onChange={handleChange} value={values.email} />
                  </div>

                  <div className='_form-div'>
                    <h3 className='_form-subtitle'>Password</h3>
                    <input className='_input-half' type="password" name="password" placeholder='Password' onChange={handleChange} value={values.password} />
                  </div>
                </div>

                
                <div className='_div_left'>
                  <button className='buttonSend' type="submit">Login</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Login;
