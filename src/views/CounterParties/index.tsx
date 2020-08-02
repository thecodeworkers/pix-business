import React, { FC, useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from "@reach/router";
import { bindActionCreators } from 'redux';
import { connect, shallowEqual } from 'react-redux';
import { Header, ExportButton, Tabs, DynamicTable, Search, AddNew } from '../../components';
import { DownArrow, Close, Edit } from '../../assets/img';
import { getCounterparties, saveCounterparty, searchCounterparties, getBackupCounterparties, filterCounterparties } from '../../store/actions';
import './styles.scss';
import { Formik, Form, Field, withFormik } from 'formik';
import Swal from 'sweetalert2';

const CounterParties: FC<RouteComponentProps> = (props: any) => {
  
  const { counterparty } = props;
  const [ show, setShow ] = useState(false);
  const [ select, setSelect  ] = useState('Employee');
  const [ selectedFilter, setSelectedFilter ] = useState('one');

  const selectTyppe = useRef(null);

  useEffect(() => {
    return () => props.action.getBackupCounterparties()
  }, []);

  useEffect(() => {
  }, [counterparty.counterparties]);

  let form: any = {
    counterparty: '',
    email: '',
    address: '',
    phone: '',
  };

  const dataTest = {
    keys: ['type', 'counterparty', 'address', 'email', 'phone' ],
    records: counterparty.counterparties
  };

  const openForm = () => {
    setShow(true);
  }

  const close = () => {
    setShow(false);
  }

  const selectValue = (target: any) => {

    setSelect(target.value);
  }

  const registerCounter = (value: any, reset: any) => {
    

    const newObject = {
      type: select,
      ...value
    }

    props.action.saveCounterparty(newObject);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: '180px',
      heightAuto: true
    })

    reset({value: ''});
    setShow(false);
  };

  const filterSelected = (filter: any, name: string) => {
    props.action.filterCounterparties(filter);
    setSelectedFilter(name);
  }

  return (
    <div className='_activityContainer'>

      <div className='_counterpartiesContent'>
        <div className='_counterpartiesOptions'>
          <div className='_counterpartiesLabel'> CounterParties </div>
          <AddNew action={openForm} />
        </div>

        <div className='_counterpartiesOptions'>
          <div className='_optionsTab'>
            {/* <Tabs tabs={counterPartiesTabs} /> */}
            <div className={selectedFilter === 'one' ? '_tabFilterSelected' : '_tabFilterStyles'} onClick={() => filterSelected('all', 'one')}>All</div>
            <div className={selectedFilter === 'two' ? '_tabFilterSelected' : '_tabFilterStyles'} onClick={() => filterSelected('employee', 'two')}>Employe</div>
            <div className={selectedFilter === 'three' ? '_tabFilterSelected' : '_tabFilterStyles'}  onClick={() => filterSelected('supplier', 'three')}>Supplier</div>
            <div className={selectedFilter === 'four' ? '_tabFilterSelected' : '_tabFilterStyles'} onClick={() => filterSelected('customer', 'four')}>Customer</div>
          </div>
          <div className="_inline_div">
            <Search filter={props.action.searchCounterparties} />
            <div className='_div_shadow'>
              {/* <div className='_timeLabel'>This Month <DownArrow /></div> */}
              <ExportButton data={counterparty.counterparties} name='counterparties' flag='csv' />
            </div>
          </div>
        </div>
        <DynamicTable keys={dataTest.keys} records={dataTest.records} />
      </div>

      <div className={show ? '_blur1' : '_blurNone1'} >
        <div className={show ? '_showTool1' : '_noneTool1'} >
          <div className='_closeTools' onClick={() => close()}>
            <Close />
            <div>
            </div>
          </div>

          <Formik
              // onReset={handleReset}
              initialValues={form}
              onSubmit={(values, { resetForm }: any): any => registerCounter(values, resetForm)}
            >

{(formProps) => { 

  return (
   <Form>
   <div className='_formCountierParties'>
     <div className='_formCounterparties'>
       <div className='_widthForm'>

         <h4 style={{marginBottom:'20px', textAlign: 'center'}}>Add Counterparty</h4>
         <label> Type </label>
         <select className='_inputParty' ref={selectTyppe} onChange={() => selectValue(selectTyppe.current)} >
           <option value="Employee"> Employee</option>
           <option value="Supplier"> Supplier</option>
           <option value="Customer"> Customer</option>
         </select>
         <label> Name </label>
         <Field type='text' className='_inputParty' placeholder='Name' name='counterparty' />
         <label> Email </label>
         <Field type='text' className='_inputParty' placeholder='Email' name='email' />

         <label> Address </label>
         <Field type='text' className='_inputParty' placeholder='Address' name='address' />

         <label> Phone </label>
         <Field type='text' className='_inputParty' placeholder='Phone' name='phone' />

         <div className='_buttonActionParent'>
           <button type="submit" className='_addNewButton'> <span> + </span> Add New</button>
         </div>
       </div>
     </div>

   </div>
   </Form>

      )}}
            
          
          </Formik>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ counterparty }: any) => ({ counterparty });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getCounterparties,
    saveCounterparty,
    searchCounterparties,
    getBackupCounterparties,
    filterCounterparties
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterParties);
