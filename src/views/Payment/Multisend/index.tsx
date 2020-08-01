import React, { FC } from 'react';
import './styles.scss';
import { Router, RouteComponentProps } from '@reach/router';
import Make from './Make';
import Confirmation from './Confirmation';

const Multisend: FC<RouteComponentProps> = () => {
	return (
		<Router>
			{/* <Make path='/' /> */}
			<Confirmation path='confirmation' default />
		</Router>
	);
};

export default Multisend;
