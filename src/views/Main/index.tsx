import React from 'react';
import { Router, Link } from '@reach/router';
import Login from '../Login';
import Dashboard from '../Dashboard';
import './styles.scss';
import { SideBar } from '../../components/index';
import Payment from '../Payment';

export default () => {
	return (
		<Router>
			<Login path='/tumamafuemia' />
			<Dashboard path='/dashboard' />
			<Payment path='/' />
		</Router>
	);
};
