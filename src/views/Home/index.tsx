import React from 'react';
import Dashboard from '../Dashboard';
import { Router } from '@reach/router';
import { SideBar } from '../../components';
import Payment from '../Payment';

export default () => (
	<>
		<SideBar />
		<Router>
			<Dashboard path='/dashboard' />
			<Payment path='/payments' />
		</Router>
	</>
);
