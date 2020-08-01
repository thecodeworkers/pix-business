import React, { FC, useState } from 'react';
import './styles.scss';
import { Props } from './inteface';
import { Link } from '@reach/router';

const Tabs: FC<Props> = ({ path, tabs = {} }) => {
	return (
		<div className='tabComponent'>
			{Object.keys(tabs).length
				? Object.keys(tabs).map((value: string, index) => {
						return (
							<Link key={index} to={tabs[value].route}>
								<div
									className={path === tabs[value].route ? 'tab selected' : 'tab'}
								>
									<p>{value}</p>
								</div>
							</Link>
						);
				  })
				: null}
		</div>
	);
};

export default Tabs;
