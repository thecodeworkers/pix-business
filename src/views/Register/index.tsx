import React, { FC, useState , useRef } from 'react';
import { Logo } from '../../assets/img';
import { Capsule, Heart, Coin, Camera, Taxi, Cockie } from '../../assets/img';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Props, StateProps } from './interface';
import { manageService } from '../../store/actions';
import checked from '../../assets/img/Static/checked.png';
import unchecked from '../../assets/img/Static/unchecked.png';
import './styles.scss';

const Register: FC<Props> = ({ register, action }) => {
  const [ checkSecond, setCheckSecond ] = useState(0);
  const [year, setYear] = useState('');

  const { services } = register;

  const selectCheck = (selected: boolean, keySearch: string = '') => {
    services[keySearch].selected = selected;
    action.manageService(services);
  }

  const selectYear = (year: string, selected: number) => {
    setCheckSecond(selected);
    setYear(year);
  }

  const form: any = {
    name: '',
    email: '',
    password:'',
    services: '',
    years:'',
    optionalService: ''
  }
  
  const colors: any = [
    { class: '_one_' },
    { class: '_two_' },
    { class: '_three_' },
    { class: '_four_' },
    { class: '_five_' },
    { class: '_six_' },
    { class: '_seven_' }
  ];

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
            <h3 className='_form-title'>Business Details</h3>
            <h3 className='_form-subtitle'>What is the full, legal name of your business?</h3>
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
                <div>
                  <input className='_input' type="text" name="name" placeholder='Name' onChange={handleChange} value={values.name} />
                </div>

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

                <h3 className='_form-subtitle'>Select your type of business</h3>

                <div className='_form-tabs'>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={services.serviceFood.selected ? checked : unchecked} onClick={() => selectCheck(!services.serviceFood.selected, 'serviceFood')}></img>
                    <Cockie />
                    <h3 className='_tab-title' id='Food-Services'>Food Services</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={services.servicesAuto.selected ? checked : unchecked}  onClick={() => selectCheck(!services.servicesAuto.selected, 'servicesAuto')}></img>
                    <Heart />
                    <h3 className='_tab-title' id='Beauty Services' >Beauty Services</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={services.servicesMedicine.selected ? checked : unchecked} onClick={() => selectCheck(!services.servicesMedicine.selected, 'servicesMedicine')}></img>
                    <Capsule />
                    <h3 className='_tab-title' id='Medicine & Health'>Medicine & Health </h3>
                  </div>
                </div>

                <div className='_form-tabs'>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={services.servicesEntertaiment.selected ? checked : unchecked}  onClick={() => selectCheck(!services.servicesEntertaiment.selected, 'servicesEntertaiment')}></img>
                    <Camera />
                    <h3 className='_tab-title' id='Entertaiment'>Entertaiment</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={services.servicesRent.selected ? checked : unchecked} onClick={() => selectCheck(!services.servicesRent.selected, 'servicesRent')}></img>
                    <Taxi />
                    <h3 className='_tab-title' id='Auto Services'>Auto Services</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={services.servicesBeauty.selected ? checked : unchecked} onClick={() => selectCheck(!services.servicesBeauty.selected, 'servicesBeauty')}></img>
                    <Coin />
                    <h3 className='_tab-title' id='Rent and lease '>Rent and lease </h3>
                  </div>
                </div>

                <p className='_text_blue'>I didn't find my type of business</p>
                <input className='_input' type="text" name="optional" placeholder='Write your type of business if necessary' />
                <h3 className='_form-subtitle'>How long have you been in business?</h3>

                <div className='_form-tabs'>
                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={checkSecond === 1 ? checked : unchecked} onClick={() => selectYear('- 1 year', 1)}></img>
                    <h3 className='_tab-title' id='- 1 year'>- 1 year </h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={checkSecond === 2 ? checked : unchecked} onClick={() => selectYear('1 & 5 years', 2)}></img>
                    <h3 className='_tab-title' id='1 & 5 years'> 1 & 5 years</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={checkSecond === 3 ? checked : unchecked} onClick={() => selectYear('+ 5years', 3)}></img>
                    <h3 className='_tab-title' id='+ 5years '> + 5years  </h3>
                  </div>

                </div>
                <div className='_div_left'>
                  <button className='buttonCancel'>Cancel</button>
                  <button className='buttonSend' type="submit">Done</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = ({ register }: StateProps) => ({ register })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    manageService
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
