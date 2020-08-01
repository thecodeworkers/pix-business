import React, { FC } from 'react';
import { connect } from 'react-redux';
import { StateProps, Props } from './interface';
import Home from '../Home';
import Onboarding from '../Onboarding';
import Commerce from '../Commerce';

const Main: FC<Props> = () => {
  const isAuth = false;

  return (
    <>
      {
        !isAuth ? (
          <>
          <Home/>
          {/* <Commerce/> */}
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
