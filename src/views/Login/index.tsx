import React, { FC, useEffect } from 'react';
import { Logo } from '../../assets/img';
import { Formik, Form, Field } from 'formik';
import { StateProps, Props } from './interface';
import { bindActionCreators } from 'redux';
import { login } from '../../store/actions';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import './styles.scss';

const Login: FC<Props> = ({ auth }) => {
  const { isAuth } = auth;

  useEffect(() => {
    if(auth) navigate('/dashboard');
  }, [isAuth]);

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
    password: '',
  };

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
             errors,
             touched
            }) => (
              <Form>
                <div className='_form-div-father'>
                  <div className='_form-div'>
                    <h3 className='_form-subtitle'>Username</h3>
                    <Field className='_input-half' type="text" name="email" placeholder='Username'/>
                  </div>

                  <div className='_form-div'>
                    <h3 className='_form-subtitle'>Password</h3>
                    <Field className='_input-half' type="password" name="password" placeholder='Password'/>
                  </div>
                </div>

                <div className='_div_left'>
                  <button className='buttonSend' type="submit">Login</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>

    </div>
  );
}

const mapStateToProps = ({ auth }: StateProps) => ({ auth });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    login
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
