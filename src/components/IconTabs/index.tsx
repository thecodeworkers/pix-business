import React, { FC } from 'react';
import './styles.scss';
import { Props } from './inteface';

const IconTabs: FC<Props> = ({ location, navigate, tabs = {} }) => {
	return (
		<div className='iconTabComponent'>
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
								{tabs[value].icon}
								<div>
									<p>{value}</p>
								</div>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default IconTabs;
