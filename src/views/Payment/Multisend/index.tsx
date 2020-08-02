import React, { FC } from 'react';
import './styles.scss';
import { Router, RouteComponentProps } from '@reach/router';
import Make from './Make';
import Confirmation from './Confirmation';

const Multisend: FC<RouteComponentProps> = () => {
	return (
		<Router>
			<Make path='/make' default />
			<Confirmation path='confirmation' />
		</Router>
	);
};

export default Multisend;
