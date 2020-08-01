import React, { FC } from 'react';
import './styles.scss';
import { Props } from './inteface';
import { Link } from '@reach/router';

const IconTabs: FC<Props> = ({ path, tabs = {}, width, height }) => {
	return (
		<div className='iconTabComponent'>
			{Object.keys(tabs).length
				? Object.keys(tabs).map((value: string, index) => {
						return (
							<Link key={index} to={tabs[value].route} style={{ width: width }}>
								<div
									key={index}
									style={{ height: height }}
									className={
										path === tabs[value].route ? 'tab selected' : 'tab'
									}
								>
									<div className='icon'>
										{path === tabs[value].route
											? tabs[value].iconSelected
											: tabs[value].icon}
									</div>
									<div>
										<p>{value}</p>
										<p>{tabs[value].description}</p>
									</div>
								</div>
							</Link>
						);
				  })
				: null}
		</div>
	);
};

export default IconTabs;
