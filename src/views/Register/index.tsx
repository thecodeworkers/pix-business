import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Logo } from '../../assets/img';
import './styles.scss';

const Register: FC<RouteComponentProps> = () => (

  <div className='_main'>
    <div className='_nav'>
      <div className='_rightContent'>
        <div className='_header'>
          <div className='_logotype'>
            <Logo />
          </div>

        </div>
        <div className='_links'>

          <h3 className='_title'>Hello! Tell us
          about your
business.</h3>

          <h5 className='_subtitle'>Please let us know your business details.</h5>
        </div>
      </div>

      <div className='_footer'>

        <p className='_copyright'> Copyright 2020 The Pix LLC. All rights reserved.</p>
      </div>

    </div>

    <div className='_line'>
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
        <h3 className='_form-title'>Business Details</h3>
        <h3 className='_form-subtitle'>What is the full, legal name of your business?</h3>
      </div>

      <form>
        <div>
          <input className='_input' type="text" name="name" placeholder='Name' />
        </div>
        <div className='_form-div-father'>
        <div className='_form-div'>
          <h3 className='_form-subtitle'>Username</h3>
          <input className='_input-half' type="text" name="username" placeholder='Username' />
          
        </div>
        <div className='_form-div'>
        <h3 className='_form-subtitle'>Password</h3>
          <input className='_input-half' type="password" name="password" placeholder='Password' />

        </div>
        </div>

        <div>
        <h3 className='_form-subtitle'>Select your type of business</h3>
        <div className='_divGray'>
         <span>hola</span>
        </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  </div>

);

const colors: any = [
  { class: '_one' },
  { class: '_two' },
  { class: '_three' },
  { class: '_four' },
  { class: '_five' },
  { class: '_six' },
  { class: '_seven' }
];

export default Register;
