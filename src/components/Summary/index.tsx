import React, { FC } from 'react';
import './styles.scss';
import { Props } from './inteface';

const Summary: FC<Props> = ({ values = {}, multi = false, array = [] }) => {
	return (
		<div>
			<div className='summaryComponent'>
				{multi
					? array.length
						? array.map((value: any, index: any) => {
								return (
									<div key={index} className='summaryValues'>
										<p>{value.name}</p>
										<p>{value.amount} USDC</p>
									</div>
								);
						  })
						: null
					: Object.keys(values).length
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
			<div className='Outer'>
				{multi
					? Object.keys(values).length
						? Object.keys(values).map((value: string, index) => {
								return (
									<div key={index} className='summaryOuter'>
										<p>{value}</p>
										<p>{values[value]} USDC</p>
									</div>
								);
						  })
						: null
					: null}
			</div>
		</div>
	);
};

export default Summary;
