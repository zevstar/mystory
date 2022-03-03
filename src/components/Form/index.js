import { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Form = ({ fetchCharacters, editForm }) => {
	const [childname, setChildname] = useState('');
	const [parent1, setParent1] = useState('');
	const [parent2, setParent2] = useState('');
	const [donor1, setDonor1] = useState('');
	const [donor2, setDonor2] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newCharacter = {
			childname: childname,
			parent1: parent1,
			parent2: parent2,
			donor1: donor1,
			donor2: donor2,
		};

		try {
			const response = await axios.post(
				'http://localhost:8080/api/v1/add/childname',
				newCharacter)

            if(response.status === 200) {
                setChildname('')
				setParent1('')
				setParent2('')
				setDonor1('')
				setDonor2('')
            }
			fetchCharacters();
		
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<form id='form-container' onSubmit={handleSubmit}>
			<div className='form-group row'>
				<label
					htmlFor='colFormLabelSm'
					className='col-sm-2 col-form-label col-form-label-sm'
				>
					Child's name:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Child here'
                        value={childname}
						onChange={(e) => setChildname(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label htmlFor='colFormLabel' className='col-sm-2 col-form-label'>
					Parent 1:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Parent 1 here'
                        value={parent1}
						onChange={(e) => setParent1(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label htmlFor='colFormLabel' className='col-sm-2 col-form-label'>
					Parent 2:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Parent 2 here'
                        value={parent2}
						onChange={(e) => setParent2(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label htmlFor='colFormLabel' className='col-sm-2 col-form-label'>
					Donor 1:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Donor 1 here'
                        value={donor1}
						onChange={(e) => setDonor1(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-group row'>
				<label htmlFor='colFormLabel' className='col-sm-2 col-form-label'>
					Donor 2:
				</label>
				<div className='col-sm-10'>
					<input
						className='form-control'
						id='colFormLabel'
						placeholder='Enter name of Donor 2 here'
                        value={donor2}
						onChange={(e) => setDonor2(e.target.value)}
					/>
				</div>
			</div>
			<button className='btn btn-primary' type='submit'>
				{editForm ? 'Edit' : 'Submit' }
			</button>
		</form>
	);
};

export default Form;
