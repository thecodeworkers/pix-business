import React, { useState } from 'react';
import { UsdcCard } from '../../assets/img';
import './styles.scss';
const PasteWallet = (props: any) => {
	const { returnValue } = props;

	const [value, setValue] = useState('');

	const Returned = (event: any) => {
		let values = event.target.value;

		console.log(values);

		setValue(values);
		returnValue(values);
	};

	const Paste = () => {
		if (navigator.clipboard) {
			navigator.clipboard.readText().then((text) => {
				setValue(text);
				returnValue(text);
			});
		}
	};

	return (
		<div className='_cardUsdComponent'>
			<div className='_logoContent'>
				<UsdcCard />
			</div>

			<div style={{width: '75%'}}>
				<p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={Paste}>
					Tap to paste
				</p>
				<input
					style={{width: '100%'}}
					type='text'
					value={value}
					placeholder='Or enter your wallet'
					className='_walletField'
					onChange={Returned}
				/>
			</div>
		</div>
	);
};

export default PasteWallet;
