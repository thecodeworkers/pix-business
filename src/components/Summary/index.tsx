import React, { FC } from 'react';
import './styles.scss';
import { Props } from './inteface';

const Summary: FC<Props> = ({ values = {} }) => {
	return (
		<div className='summaryComponent'>
			{Object.keys(values).length
				? Object.keys(values).map((value: string, index) => {
						return (
							<div key={index} className='summaryValues'>
								<p>{value}</p>
								<p>{values[value]} USDC</p>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default Summary;
