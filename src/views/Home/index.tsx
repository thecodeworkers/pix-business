import React from 'react';
import Dashboard from '../Dashboard';
import { Router } from '@reach/router';
import { SideBar, Header } from '../../components';
import './styles.scss';
import Payment from '../Payment';

export default () => (
	<>
		<div className='_parentcont'>
			<SideBar />
			<div className='_dcontainer'>
				<Header />
				<Router>
					<Dashboard path='/dashboard' />
					<Payment path='/payments' />
				</Router>
			</div>
		</div>
	</>
);
