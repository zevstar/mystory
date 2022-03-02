import React from 'react';
import './styles.css';

const Form = () => {
	return (
		<form id='form-container'>
			<div className='form-group row'>
				<label
					for='colFormLabelSm'
					className='col-sm-2 col-form-label col-form-label-sm'
				>
					Child's name:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Child here'
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label for='colFormLabel' className='col-sm-2 col-form-label'>
					Parent 1:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Parent 1 here'
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label for='colFormLabel' className='col-sm-2 col-form-label'>
					Parent 2:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Parent 2 here'
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label for='colFormLabel' className='col-sm-2 col-form-label'>
					Donor 1:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Donor 1 here'
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label for='colFormLabel' className='col-sm-2 col-form-label'>
					Donor 2:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Donor 2 here'
					/>
				</div>
			</div>
			
		</form>
	);
};

export default Form;
