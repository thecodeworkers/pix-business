import React from 'react';
import './styles.scss';
import { Link } from '@reach/router'

const ActionButton = (props: any) => {

	return (
		<div className='_div'>
			<div className='_divButton'>
				<Link to={props.url}>
					<button className='_action'>
						{props.img}
					</button>
				</Link>

			</div>
			<div className='_space'>
			<span className={'_titleButton'}>{props.title}</span>
			</div>
		</div>
	)

}

export default ActionButton;
