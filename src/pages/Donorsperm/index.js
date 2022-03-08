import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const Donorsperm = () => {
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
		<div class>
			{characters.map((character) => (
				<div className='card' key={character.id}>
					<div className='card-body' id='body-container'>
						<h1 className='card-title2'>{character.childname}'s Story</h1>
                        <div id='content-container'>
                        <div className = 'flex-photo'>
						<img
							src='https://st.depositphotos.com/1144687/2503/i/450/depositphotos_25033125-stock-photo-family-concept.jpg'
							alt='Mother holding infant'
						></img>
                        </div>
                        <div className= 'flex-text'>
						<h3 className='card-text'>
							Let me tell you about a very special baby. To make a baby you need
							sperm from a man and an egg from a woman. {character.parent1} and{' '}
							{character.parent2} used sperm from {character.donor} with an egg
							from {character.parent1}. Nine months later my favorite baby was
							born. Do you know the name of this baby? It's you,{' '}
							{character.childname}!
						</h3>
                        </div>
					</div>
                    </div>
				</div>
			))}
		</div>
	);
};

export default Donorsperm;
