// 223 4:34
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetchCharacters();
	}, []);

	const fetchCharacters = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/api/v1/allchildnames'
			);

			console.log(response);
			setCharacters(response.data);
		} catch (err) {
			console.log(err);
		}
	};
	console.log('this is our state', characters);
	return (
		<>
            <Form fetchCharacters={fetchCharacters}/>

			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Child name</th>
						<th scope='col'>Parent1</th>
						<th scope='col'>Parent2</th>
						<th scope='col'>Donor1</th>
						<th scope='col'>Donor2</th>
					</tr>
				</thead>
				<tbody>
					{characters.map((character) => {
						return (
							<tr key={character.id}>
								<td data-label='Name of Child'>
									{character.childname}
								</td>
								<td data-label='Parent 1'>{character.parent1}</td>
								<td data-label='Parent 2'>{character.parent2}</td>
								<td data-label='Donor 1'>{character.donor1}</td>
								<td data-label='Donor 2'>{character.donor2}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Characters;
