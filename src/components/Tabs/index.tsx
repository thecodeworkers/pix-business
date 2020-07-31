import React, { FC } from 'react';
import './styles.scss';
import { Props } from './inteface';

const Tabs: FC<Props> = ({ location, navigate, tabs = {} }) => {
	return (
		<div className='tabComponent'>
			{Object.keys(tabs).length
				? Object.keys(tabs).map((value: string, index) => {
						return (
							<div
								key={index}
								className={tabs[value].route ? 'tab selected' : 'tab'}
								onClick={() => {
									console.log(location);
								}}
							>
								<p>{value}</p>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default Tabs;
