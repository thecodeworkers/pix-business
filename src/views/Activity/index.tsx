import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { ExportButton, Tabs,Search, FilterbyTimeButton } from '../../components';
import { Pixel } from '../../assets/img';
import { connect } from 'react-redux';
import { searchActivities } from '../../store/actions';
import Overview from './Overview';
import Checking from './Checking';
import Savings from './Savings';
import './styles.scss';
import { bindActionCreators } from 'redux';

const Activity: FC<RouteComponentProps | any> = ({ location, navigate = (nav: any) => {}, activity, action }) => {
  const { activities } = activity;
  
  useEffect(() => {
    navigate('overview');
	}, []);

  const activityTabs = {
    Overview: { route: 'overview' },
    Checking: { route: 'checking' },
    Savings: { route: 'savings' }
  };

  return (
    <div className='_activityContainer'>
      <div className='_activityContent'>
        <div className='_activityLabel'> 
          <p>Activity</p>
          <span> <Pixel width={'30'} height={'17'} color={'white'} /> </span> 
        </div>
        <div className='_activityOptions'>
          <Tabs path={location?.pathname.split('/')[2]} tabs={ activityTabs } />
          <Search filter={action.searchActivities} />
          <div className="_exportOption">
            {/* <div className="_filterBtnContainer">
              <FilterbyTimeButton />
            </div> */}
            <ExportButton data={activities} name='activities' flag='csv' />
          </div>
        </div>
        <div className="_activityTabs">
          <Router>
            <Overview path='/overview' />
            <Checking path='/checking' />
            <Savings path='/savings' />
          </Router>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ activity }: any) => ({ activity });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    searchActivities
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
