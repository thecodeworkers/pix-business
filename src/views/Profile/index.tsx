import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import './styles.scss';
import { Pixel } from '../../assets/img';
import { Formik, Form, Field } from 'formik';
import { Close } from '../../assets/img';
import { connect } from 'react-redux';

const Profile: FC<RouteComponentProps> = (props: any) => {

  const commerce = props.commerce.commerce

  const [show, setShow] = useState(false);

  const form: any = {
    name: '',
    email: '',
    address: '',
    phone: '',
  };

  const registerCommerce = (value: any) => {
    console.log(value);

    const newObject = {
      ...value
    }
    props.action.saveCounterparty(newObject);
  };

  const openForm = () => {
    setShow(true);
  }

  const close = () => {
    setShow(false);
  }


  return (
    <div>
      <div>
      <div className='_name'>
        <div className="_image">
          <Pixel color={'#2699fb'} width={'40'} height={'40'} />

        </div>
        <h2 className='_nameTitle'>{commerce.name}</h2>
      </div>
      <h4 className='_nameSubTitle'>{commerce.email}</h4>

      <div className=''>

      </div>
      {/*  <Formik
          initialValues={form}
          onSubmit={values => registerCommerce(values)}
        >

          <Form>
            <div className='_formCountierParties'>
              <div className='_formCounterparties'>
                <div className='_widthForm'>

                  <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Counterparty</h4>
                  <label> Type </label>
                 
                  <label> Name </label>
                  <Field type='text' className='_inputParty' placeholder='Name' name='name' />
                  <label> Email </label>
                  <Field type='text' className='_inputParty' placeholder='Email' name='email' />

                  <label> Address </label>
                  <Field type='text' className='_inputParty' placeholder='Address' name='address' />

                  <label> Phone </label>
                  <Field type='text' className='_inputParty' placeholder='Phone' name='phone' />

                  <div className='_buttonActionParent'>


                
                  </div>
                </div>
              </div>

            </div>
          </Form>

        </Formik>
        ); */}
    </div>
    </div>
  );
}

const mapStateToProps = ({ commerce }: any) => ({ commerce });


export default connect(mapStateToProps)(Profile);


