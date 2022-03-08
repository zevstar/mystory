import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Donoregg = () => {
    
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetchCharacters();
	}, [])

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
              <div className="card" key={character.id}>
              
                <h5 className="card-title">{character.childname}'s Story</h5>
                <img
					src='https://images.pexels.com/photos/8576421/pexels-photo-8576421.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
					alt='Mother holding infant'
				></img>
                <h6 className="card-text">
                    Let me tell you about a very special baby.

                    To make a baby you need sperm from a man and an egg from a woman. {character.parent1} and {character.parent2} used an egg from {character.donor1} who was kind, and gentle, beautiful, and smart.  Nine months later my favorite baby was born.

                    Do you know the name of this baby?

                    It's you, {character.childname}!

                     </h6>
                
              
            </div>
            
           
             ))}
        </div>               
        
    )

}



export default Donoregg;
