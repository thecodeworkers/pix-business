import React, { useEffect, FC } from 'react';
// import { SideBar } from '../../components/index'; 
import { Router } from '@reach/router';
import { ping } from '../../store/actions';
import { connect } from 'react-redux';
import Login from '../Login';
import Home from '../Home';
import './styles.scss';
import { StateProps, Props } from './interface';
import { bindActionCreators } from 'redux';

const Main: FC<Props> = ({ action, circle }) => {
  const { result } = circle 
  const isAuth = true;

  useEffect(() => {
    if(!result) action.ping();
    console.log(result);
  }, [result]);

  return (
    <>
      {
        isAuth ? (
          <Home/>
        ) : (
          <Router>
            <Login path="/"/>
          </Router>
        )
      }
    </>
  );
}

const mapStateToProps = ({ circle }: StateProps): StateProps => ({ circle });

const mapDispatchToProps = (dispatch: any) => {
  const actions = { ping };

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
