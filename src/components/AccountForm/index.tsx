import React, { FC, useState } from 'react';
import './styles.scss';
import { Formik, Form, Field } from 'formik';
import { Props } from './interfaces';

export const AccountForm: FC<Props> = ({ init, data = [], getData }) => {
	return (
		<div className='accountForm'>
			<Formik
				initialValues={init}
				onSubmit={(values) => {
					// same shape as initial values
					let validat = true;
					Object.keys(values).map((value) => {
						if (values[value] !== '') {
							validat = validat && true;
							return;
						}
						validat = validat && false;
					});
					getData(values, validat);
				}}
				validateOnChange={true}
			>
				<Form>
					{data.map((value: any, key: any) => (
						<div className='fieldForm' key={key}>
							<p>{value.label}</p>
							<Field type={value.type} name={value.name} />
						</div>
					))}
					<button className='formikButton' type='submit'>
						Add Account
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AccountForm;
