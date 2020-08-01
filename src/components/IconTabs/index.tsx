import React, { FC } from 'react';
import './styles.scss';
import { Props } from './inteface';

const IconTabs: FC<Props> = ({
	location,
	navigate,
	tabs = {},
	width,
	height,
}) => {
	return (
		<div className='iconTabComponent'>
			{Object.keys(tabs).length
				? Object.keys(tabs).map((value: string, index) => {
						return (
							<div
								key={index}
								style={{ width: width, height: height }}
								className={tabs[value].route ? 'tab selected' : 'tab'}
								onClick={() => {
									console.log(location);
								}}
							>
								<div className='icon'>
									{tabs[value].route
										? tabs[value].iconSelected
										: tabs[value].icon}
								</div>
								<div>
									<p>{value}</p>
									<p>{tabs[value].description}</p>
								</div>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default IconTabs;
