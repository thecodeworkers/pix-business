import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from "@reach/router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, ExportButton, Tabs, DynamicTable, Search, AddNew } from '../../components';
import { DownArrow, Close } from '../../assets/img';
import { getCounterparties, saveCounterparty } from '../../store/actions';
import './styles.scss';

const CounterParties: FC<RouteComponentProps> = (props: any) => {

  const { counterparty } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    // console.log(counterparty.counterparties);
  }, []);

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

  // const counterPartiesTabs = {
  //   All: { route: 'all' },
  //   Employe: { route: 'employe' },
  //   Supplier: { route: 'supplier' },
  //   Customer: { route: 'customer' }
  // };

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
            <div className='_tabFilterStyles'>All</div>
            <div className='_tabFilterStyles'>Employe</div>
            <div className='_tabFilterStyles'>Supplier</div>
            <div className='_tabFilterStyles'>Customer</div>
          </div>
          <div className="_inline_div">
            <Search filter={''} />
            <div className='_div_shadow'>
              <div className='_timeLabel'>This Month <DownArrow /></div>
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

          {/* <form> */}
            <div className='_formCountierParties'>
              <div className='_formCounterparties'>
              <h1>Add Counterperty</h1>

              {/* <label for='name'> </label> */}
              <input type='_text' className='_inputParty' placeholder='Type'/> 
              <input type='_text' className='_inputParty' placeholder='Name'/> 
              <input type='_text' className='_inputParty' placeholder='Email'/> 
              <input type='_text' className='_inputParty' placeholder='Address'/> 
              
              {/* <input type='_text' className='_inputParty'> </input>
              <input type='_text' className='_inputParty'></input>
              <input type='_text' className='_inputParty'></input>
              <input type='_text' className='_inputParty'></input> */}
              </div>
               
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ counterparty }: any) => ({ counterparty });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getCounterparties,
    saveCounterparty
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterParties);


// export default CounterParties