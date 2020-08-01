import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { searchActivities } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Search } from '../../components';
import './styles.scss';

const Profile: FC<RouteComponentProps> = (props: any) => {
  const filterResults = (event: any) => {
    event.preventDefault();
    const currentValue = event.target.value;

    props.action.searchActivities(currentValue);
  }
  
  return (
    <>
      <Search filter={filterResults}/>
      <div>Profile</div>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    searchActivities
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Profile);
