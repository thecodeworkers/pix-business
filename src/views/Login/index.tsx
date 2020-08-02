import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Logo } from '../../assets/img';
import background from '../../assets/img/Static/pix_dark.png';
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
    <div className='_mainO'>
{/*     <img src={background}></img> */}
      <div className='_navO'>
        <div className='_rightContentO'>
          <div className='_headerO'>
            <div className='_logotypeO'>
              <Logo />
            </div>
          </div>
          <div className='_listO'>
          <div className='_formGrandFatherOne'>
      <div className='_formSonOne'>
        <div className='_form'>
          <div className='_text-center'>
            <h3 className='_form-titleO'>Welcome</h3>
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
                <div className='_form-div-fatherO'>
                  <div className='_form-divO'>
                    <h3 className='_form-subtitleO'>Username</h3>
                    <input className='_input-halfO' type="text" name="email" placeholder='Username' onChange={handleChange} value={values.email} />
                  </div>

                  <div className='_form-divO'>
                    <h3 className='_form-subtitleO'>Password</h3>
                    <input className='_input-halfO' type="password" name="password" placeholder='Password' onChange={handleChange} value={values.password} />
                  </div>
                </div>

                
                <div className='_div_leftO'>
                <button className='buttonSendO' type="submit">Log in</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
            
            
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

    </div>
  );
}

export default Login;
