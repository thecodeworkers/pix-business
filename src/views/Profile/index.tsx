import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ExportButton, AddNew} from '../../components';
import './styles.scss';
import { Pixel, Heart, Coin, Capsule, Camera, Cockie, Taxi, Add} from '../../assets/img';
import { Formik, Form, Field } from 'formik';
import { getCounterparties, saveCounterparty, getBackupCounterparties, filterCounterparties } from '../../store/actions';
import { connect } from 'react-redux';
import { Close } from '../../assets/img';


const Profile: FC<RouteComponentProps> = (props: any) => {
  
  
  const commerce = props.commerce.commerce
  console.log(commerce);
  const [ show, setShow ] = useState(false);
  const [ formValid, setFormValid ] = useState(false);

  const form: any = {
    name: '',
    email: '',
    address: '',
    phone: '',
  };

  const close = () => {
    setFormValid(false)
  }


  const registerCommerce = (value: any) => {
    console.log(value);

    const newObject = {
      ...value
    }
    props.action.saveCounterparty(newObject);
  };

  return (
    <div className='_div_full'>
       <div className='_closeTools' onClick={() => close()}>
          <Close />
        </div> 
      {
        !formValid ? 
   
          <div>

      <div className='div_space'>
      <div className='_name'>
        <div className="_image">
          <Pixel color={'#2699fb'} width={'40'} height={'40'} />

        </div>
        <h2 className='_nameTitle'>{commerce.name}</h2>
      </div>
      <h4 className='_nameSubTitle'>{commerce.email}</h4>
    </div>
      <div className='div_white'>
      <div className='_inline '>
      <h3>{commerce.services}</h3>
      </div>
      <div className='_inline ' >
      <h3> {commerce.years}</h3>
      </div>
     
      </div>
      <div className='_addon'> 
      <ExportButton/>
      <div className='_addBankButton' onClick={() => setFormValid(true)}><span>+ Add New Bank Account</span></div>
      </div>
        </div>
      
        :

        <>
          <div className='_testinParents'>
            
         <Formik
              initialValues={form}
              onSubmit={values => registerCommerce(values)}
            >
            
          <Form>
            <div className='_formCountierParties'>
              <div className='_formCounterparties'>
                <div className='_widthForm'>

                  <h4 style={{marginBottom:'20px', textAlign: 'center'}}>Add Bank</h4>
  
                  <label> Bank Name </label>
                  <Field type='text' className='_inputParty' placeholder='BankName' name='bankname' />
                  <label> Country </label>
                  <select className='_inputParty'>
                    <option value="U.S.A">U.S.A</option>
                    <option value="England">England</option>
                    <option value="Venezuela">Venezuela</option>
                  </select>
                  <label> City </label>
                  <select className='_inputParty'>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Seatlle">Seatlle</option>
                  </select>
            
                  <label> line One </label>
                  <Field type='text' className='_inputParty' placeholder='LineOne' name='lineOne' />

                  <label> line Two </label>
                  <Field type='text' className='_inputParty' placeholder='LineTwo' name='lineTwo' />

                  <label> District </label>
                  <Field type='text' className='_inputParty' placeholder='District' name='district' />

                  <label> Postal Code </label>
                  <Field type='text' className='_inputParty' placeholder='PostalCode' name='postal_code' />

                  <div className='_buttonActionParent'>
                   
                    <AddNew action={registerCommerce} />
                  
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


export default connect(mapStateToProps)(Profile);


