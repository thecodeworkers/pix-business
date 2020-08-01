import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Logo } from '../../assets/img';
import { Capsule, Heart, Coin, Camera, Taxi, Cockie } from '../../assets/img';
import checked from '../../assets/img/Static/checked.png';
import unchecked from '../../assets/img/Static/unchecked.png';
import './styles.scss';

const Register: FC<RouteComponentProps> = () => (

  <div className='_mainOne'>
    <div className='_navOne'>
      <div className='_rightContentOne'>
        <div className='_headerOne'>
          <div className='_logotypeOne'>
            <Logo />
          </div>

        </div>
        <div className='_linksOne'>

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
            <h3 className='_form-subtitle'>Select your type of business</h3>
            <div className='_form-tabs'>
              <div className='_divGray'>
                 <img  className='_checkbox' width='45px' src={checked}></img>
                <Cockie />
                <h3 className='_tab-title'>Food Services</h3>
              </div>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
                <Heart />
                <h3 className='_tab-title' >Beauty Services</h3>
              </div>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
                <Capsule />
                <h3 className='_tab-title'>Medicine & Health </h3>
              </div>
            </div>
            <div className='_form-tabs'>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
                <Camera />
                <h3 className='_tab-title'>Beauty Services</h3>
              </div>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
                <Taxi />
                <h3 className='_tab-title'>Auto Services</h3>
              </div>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
                <Coin />
                <h3 className='_tab-title'>Rent and lease </h3>
              </div>
            </div>
            <p className='_text_blue'>I didn't find my type of business</p>
            <input className='_input' type="text" name="name" placeholder='Write your type of business if necessary' />

            <h3 className='_form-subtitle'>How long have you been in business?</h3>

            <div className='_form-tabs'>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
              
                <h3 className='_tab-title'>- 1 year </h3>
              </div>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
               
                <h3 className='_tab-title'>1& 5 years</h3>
              </div>
              <div className='_divGray'>
              <img className='_checkbox' width='45px' src={unchecked}></img>
               
                <h3 className='_tab-title'>+ 5years  </h3>
              </div>
            </div>
          </form>
            <button className='submit'></button>
            <button className='cancel'></button>
        </div>
      </div>
    </div>
  </div>

);

const colors: any = [
  { class: '_one_' },
  { class: '_two_' },
  { class: '_three_' },
  { class: '_four_' },
  { class: '_five_' },
  { class: '_six_' },
  { class: '_seven_' }
];

export default Register;
