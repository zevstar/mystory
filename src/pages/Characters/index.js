// 223 5:54
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';

const Characters = () => {
	const [characters, setCharacters] = useState([]);
    const [editForm, setEditForm] = useState(false);
    const [characterToEdit, setCharacterToEdit] = useState({})

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

	const deleteCharacter = async (id) => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/api/v1/childname/delete/${id}`
			);
            fetchCharacters()
		} catch (err) {
			console.log(err);
		}
	};
    const handleEdit = (character) => {
        setEditForm(true)
        setCharacterToEdit(character)
    }

	return (
		<>
			<Form
                fetchCharacters={fetchCharacters}
                editForm={editForm}
                characterToEdit={characterToEdit}

            />

			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Child name</th>
						<th scope='col'>Parent1</th>
						<th scope='col'>Parent2</th>
						<th scope='col'>Donor1</th>
						<th scope='col'>Donor2</th>
                        <th scope='col'>Edit</th>
					</tr>
				</thead>
				<tbody>
					{characters.map((character) => {
						return (
							<tr key={character.id}>
								<td data-label='Name of Child'>{character.childname}</td>
								<td data-label='Parent 1'>{character.parent1}</td>
								<td data-label='Parent 2'>{character.parent2}</td>
								<td data-label='Donor 1'>{character.donor1}</td>
								<td data-label='Donor 2'>{character.donor2}</td>
                                <td data-label='Edit'>

                                <i
                                    className="bi bi-pencil-fill"
                                    onClick={() =>handleEdit(character)}>
                                </i>


                                <i 
                                    className="bi bi-trash2-fill"
                                    onClick={() => deleteCharacter(character.id)}>
                                </i>

                                

                                </td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Characters;
