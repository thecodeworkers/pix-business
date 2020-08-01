import React, { FC, useState } from 'react';
import './styles.scss';
import { Props } from './inteface';
import { Usdc } from '../../assets/img';

const InputValue: FC<Props> = ({ defaulValue, returnValue }) => {
	const [value, setValue] = useState(defaulValue);

	const Returned = (event: any) => {
		let values = event.target.value;
		setValue(values);
		returnValue(values);
	};

	return (
		<div className='inputComponent'>
			<div className='input'>
				<input type='text' value={value} onChange={Returned} />
			</div>
			<div className='lineInput'></div>
			<div className='iconValue'>
				<Usdc />
			</div>
		</div>
	);
};

export default InputValue;
