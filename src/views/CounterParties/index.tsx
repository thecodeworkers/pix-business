import React, { FC, useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from "@reach/router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, ExportButton, Tabs, DynamicTable, Search, AddNew } from '../../components';
import { DownArrow, Close } from '../../assets/img';
import { getCounterparties, saveCounterparty, searchCounterparties, getBackupCounterparties, filterCounterparties } from '../../store/actions';
import './styles.scss';
import { Formik, Form, Field } from 'formik';

const CounterParties: FC<RouteComponentProps> = (props: any) => {

  const { counterparty, saveCounterparty } = props;
  const [ show, setShow ] = useState(false);
  const [ select, setSelect  ] = useState('Employee');

  const type = useRef(null);
  useEffect(() => {
    return () => props.action.getBackupCounterparties()
  }, []);

  const form: any = {
    name: '',
    email: '',
    address: '',
    phone: '',
  };

  const dataTest = {
    keys: ['type', 'counterparty', 'address', 'email', 'phone', 'actions'],
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


  const registerCommerce = (value: any) => {
    console.log(value);    

    const newObject = {
      type: select,
      ...value
    }
    props.action.saveCounterparty(newObject);
  };

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
            <div className='_tabFilterStyles' onClick={() => props.action.filterCounterparties('all')}>All</div>
            <div className='_tabFilterStyles' onClick={() => props.action.filterCounterparties('employee')}>Employe</div>
            <div className='_tabFilterStyles' onClick={() => props.action.filterCounterparties('supplier')}>Supplier</div>
            <div className='_tabFilterStyles' onClick={() => props.action.filterCounterparties('customer')}>Customer</div>
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
              initialValues={form}
              onSubmit={values => registerCommerce(values)}
            >
            
          <Form>
            <div className='_formCountierParties'>
              <div className='_formCounterparties'>
                <div className='_widthForm'>

                  <h4 style={{marginBottom:'20px', textAlign: 'center'}}>Add Counterparty</h4>
                  <label> Type </label>
                  <select className='_inputParty' ref={type} onChange={() => selectValue(type.current)}>
                    <option value="Employee"> Employee</option>
                    <option value="Supplier"> Supplier</option>
                    <option value="Customer"> Customer</option>
                  </select>
                  <label> Name </label>
                  <Field type='text' className='_inputParty' placeholder='Name' name='name' />
                  <label> Email </label>
                  <Field type='text' className='_inputParty' placeholder='Email' name='email' />

                  <label> Address </label>
                  <Field type='text' className='_inputParty' placeholder='Address' name='address' />

                  <label> Phone </label>
                  <Field type='text' className='_inputParty' placeholder='Phone' name='phone' />

                  <div className='_buttonActionParent'>
                    <AddNew action={registerCommerce} />

                    {/* <button type='submit'> submit</button> */}
                  </div>
                </div>
              </div>

            </div>
          </Form>

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
