import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Search } from '../../components';
import './styles.scss';

const Profile: FC<RouteComponentProps> = () => (
  <>
    <Search/>
    <div>Profile</div>
  </>
);

export default Profile;
