import React from 'react';
import { UsdcCard } from '../../assets/img';
import './styles.scss';

const DestinationAccount = (props: any) => {
	return (
		<div className='_destinationCard'>
			<div className='_logoContent'>
				<UsdcCard />
			</div>

			<div className='_dataDestinationCard'>
				<p>Checking account</p>
				<p>{props.wallet}</p>
			</div>
		</div>
	);
};

export default DestinationAccount;
