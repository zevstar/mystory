import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';
const Donoregg = () => {
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

	return (
		<div>
			{characters.map((character) => (
				<div className='card' key={character.id}>
					<div className='card-body' id='body-container'>
						<h1 className='card-title1'>{character.childname}'s Story</h1>
						<div id='content-container'>
							<div className='flex-photo'>
								<img
									src='https://images.unsplash.com/photo-1542644384-49f9febd8443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
									alt='Hands holding infant'
								></img>
							</div>
							<div className='flex-text'>
								<h3 className='card-text'>
									Let me tell you about a very special baby. To make a baby you
									need sperm from a man and an egg from a woman.{' '}
									{character.parent1} and {character.parent2} used an egg from{' '}
									{character.donor1} who was kind, and gentle, beautiful, and
									smart. Nine months later my favorite baby was born. Do you
									know the name of this baby? It's you, {character.childname}!
								</h3>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Donoregg;
