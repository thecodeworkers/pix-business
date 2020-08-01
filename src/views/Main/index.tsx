import React, { FC } from 'react';
import { connect } from 'react-redux';
import { StateProps, Props } from './interface';
import Home from '../Home';
import Onboarding from '../Onboarding';
const Main: FC<Props> = () => {
  const isAuth = true;

  return (
    <>
      {
        isAuth ? (
          <>
          <Home/>
          </>
        ) : (
          <Onboarding/>
        )
      }
    </>
  );
}

const mapStateToProps = ({ auth }: StateProps): StateProps => ({ auth });

export default connect(mapStateToProps)(Main);
