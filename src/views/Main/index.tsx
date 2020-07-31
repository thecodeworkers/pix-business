import React, { useEffect, FC } from 'react';
import { ping } from '../../store/actions';
import { connect } from 'react-redux';
import { StateProps, Props } from './interface';
import { bindActionCreators } from 'redux';
import Home from '../Home';
import Onboarding from '../Onboarding';
import './styles.scss';

const Main: FC<Props> = ({ action, circle }) => {
  const { result } = circle 
  const isAuth = false;

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
          <Onboarding/>
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
