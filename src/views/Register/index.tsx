import React, { FC, useState , useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Logo } from '../../assets/img';
import { Capsule, Heart, Coin, Camera, Taxi, Cockie } from '../../assets/img';
import checked from '../../assets/img/Static/checked.png';
import unchecked from '../../assets/img/Static/unchecked.png';
import './styles.scss';
import { Formik } from 'formik';

const Register: FC<RouteComponentProps> = () => {
  const [ check, setCheck ] = useState(false);
  const [ checkSecond, setCheckSecond ] = useState(0);
  const [manageService, setManageService]: any = useState({
    serviceFood: {
      value: 'Service Food',
      selected: false
    },
    servicesAuto: {
      value: 'Service Food',
      selected: false
    },
    servicesMedicine: {
      value: 'Service Food',
      selected: false
    },
    servicesEntertaiment: {
      value: 'Service Food',
      selected: false
    },
    servicesRent: {
      value: 'Service Food',
      selected: false
    },
    servicesBeauty: {
      value: 'Service Food',
      selected: false
    }
  });

  const serviceFood = useRef(null);
  const servicesAuto = useRef(null);
  const servicesMedicine = useRef(null);
  const servicesEntertaiment = useRef(null);
  const servicesRent = useRef(null);
  const servicesBeauty = useRef(null);
  const yearsOne = useRef(null);
  const yearsOnetoFive = useRef(null);
  const yearsFive = useRef(null);

  const selectCheck = (selected: boolean, keySearch: string = '') => {
    // setCheck(selected);
    manageService[keySearch].selected = selected;
    console.log(manageService);
    
    form['services'] = [''];
  }

  const selectYear = (value: any, number: number) => {
    setCheckSecond(number);
    form['years'] = value.id;
  }

  const form: any = {
    name: '',
    email: '',
    password:'',
    services: '',
    years:''
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

  const yearsHandle = (event: any) => {
    form['years'] = event.value
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
                    <img className='_checkbox' width='45px' src={manageService.serviceFood.selected ? checked : unchecked} onClick={() => selectCheck(!manageService.serviceFood.selected, 'serviceFood')}></img>
                    <Cockie />
                    <h3  ref={serviceFood}  className='_tab-title' id='Food-Services'>Food Services</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={manageService.servicesAuto.selected ? checked : unchecked}  onClick={() => selectCheck(!manageService.servicesAuto.selected, 'servicesAuto')}></img>
                    <Heart />
                    <h3 ref={servicesBeauty} className='_tab-title' id='Beauty Services' >Beauty Services</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={manageService.servicesMedicine.selected ? checked : unchecked} onClick={() => selectCheck(!manageService.servicesMedicine.selected, 'servicesMedicine')}></img>
                    <Capsule />
                    <h3 ref={servicesMedicine} className='_tab-title' id='Medicine & Health'>Medicine & Health </h3>
                  </div>
                </div>

                <div className='_form-tabs'>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={manageService.servicesEntertaiment.selected ? checked : unchecked}  onClick={() => selectCheck(!manageService.servicesEntertaiment.selected, 'servicesEntertaiment')}></img>
                    <Camera />
                    <h3 ref={servicesEntertaiment} className='_tab-title' id='Entertaiment'>Entertaiment</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={manageService.servicesRent.selected ? checked : unchecked} onClick={() => selectCheck(!manageService.servicesRent.selected, 'servicesRent')}></img>
                    <Taxi />
                    <h3 ref={servicesAuto} className='_tab-title' id='Auto Services'>Auto Services</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={manageService.servicesBeauty.selected ? checked : unchecked} onClick={() => selectCheck(!manageService.servicesBeauty.selected, 'servicesBeauty')}></img>
                    <Coin />
                    <h3 ref={servicesRent} className='_tab-title' id='Rent and lease '>Rent and lease </h3>
                  </div>
                </div>

                <p className='_text_blue'>I didn't find my type of business</p>
                <input className='_input' type="text" name="name" placeholder='Write your type of business if necessary'  />
                <h3 className='_form-subtitle'>How long have you been in business?</h3>

                <div className='_form-tabs'>
                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={checkSecond === 1 ? checked : unchecked} onChange={() => yearsHandle(yearsOne.current)} onClick={() => selectYear(yearsOne.current, 1)}></img>
                    <h3 className='_tab-title' ref={yearsOne} id='- 1 year'>- 1 year </h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={checkSecond === 2 ? checked : unchecked} onChange={() => yearsHandle(yearsOnetoFive.current)} onClick={() => selectYear(yearsOnetoFive.current, 2)}></img>
                    <h3 className='_tab-title' ref={yearsOnetoFive} id='1 & 5 years'> 1 & 5 years</h3>
                  </div>

                  <div className='_divGray'>
                    <img className='_checkbox' width='45px' src={checkSecond === 3 ? checked : unchecked} onChange={() => yearsHandle(yearsFive.current)} onClick={() => selectYear(yearsFive.current, 3)}></img>
                    <h3 className='_tab-title' ref={yearsFive} id='+ 5years '> + 5years  </h3>
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

export default Register;
