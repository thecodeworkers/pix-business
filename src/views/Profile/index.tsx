import React, { FC, useState, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { bindActionCreators } from 'redux';
import { ExportButton, AddNew } from '../../components';
import './styles.scss';
import { Pixel, Heart, Coin, Capsule, Camera, Cockie, Taxi, Add } from '../../assets/img';
import { Formik, Form, Field } from 'formik';
import { saveBankAccount } from '../../store/actions';
import { connect } from 'react-redux';
import { Close } from '../../assets/img';


const Profile: FC<RouteComponentProps> = (props: any) => {

  const commerce = props.commerce.commerce
  
  const [show, setShow] = useState(false);
  const [formValid, setFormValid] = useState(false);


  const form: any = {
    bankname: '',
    address: '',
    routingNumber: '',
    checkingAccount: '',
  };


  const close = () => {
    setFormValid(false)
    setShow(false);
  }

  const registerAcount = (value: any) => {

    const newObject = {
      value
    }
    
    props.action.saveBankAccount(newObject);
  };

  return (
    <div className='_div_full'>
      <div className='_closeTools' onClick={() => close()}>
        <Close />
      </div>
      <div className='div_space'>
        <div className='_name'>
          <div className="_image">
            <Pixel color={'#2699fb'} width={'40'} height={'40'} />

          </div>
          <h2 className='_nameTitle'>{commerce.name}</h2>
        </div>
        <h4 className='_nameSubTitle'>{commerce.email}</h4>
      </div>
      {
        !formValid ?

          <div>
            <div className='div_white'>
              <div className='_inline '>
                <h3>{commerce.services}</h3>
              </div>
              <div className='_inline ' >
                <h3> {commerce.years}</h3>
              </div>

            </div>
            <div className='_addon'>
              <div className='div_spaceTwo'><ExportButton /></div>
              <div className='_addBankButton' onClick={() => setFormValid(true)}><span>+ Add New Bank Account</span></div>
            </div>
          </div>

          :
          <>
            <div className='_testinParents'>
              <Formik
                initialValues={form}
                onSubmit={values => registerAcount(values)}
              >
                <Form>
                  <div className='_formCountierPartieso'>
                    <div className='_formCounterparties'>
                      <div className='_widthForm'>

                        <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Bank</h4>

                        <label> Bank Name </label>
                        <Field type='text' className='_inputParty' placeholder='Bank Name' name='bankname' />

                        <label> Address </label>
                        <Field row='2' component='textarea' className='_inputPartyArea' placeholder='Address' name='address' />

                        <label> Routing Number </label>
                        <Field type='text' className='_inputParty' placeholder='Routing Number' name='routingNumber' />


                        <label> Checking Account </label>
                        <Field type='text' className='_inputParty' placeholder='Checking Account' name='checkingAccount' />

                        <div className='_buttonActionParent'>
                          <button className='_addNewButtonTwo' type="submit">+ Add New</button>


                        </div>
                      </div>
                    </div>

                  </div>
                </Form>

              </Formik>
            </div>
          </>

      }
    </div>

  );
}



const mapStateToProps = ({ commerce }: any) => ({ commerce });


const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    saveBankAccount
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


