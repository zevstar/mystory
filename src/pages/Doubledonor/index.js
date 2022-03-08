import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Doubledonor = () => {
    
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
              <div className="card-body">
                <h5 className="card-title">{character.childname}'s Story</h5>
                <img
					src='https://cdn.pixabay.com/photo/2017/01/31/00/44/boy-2022689_960_720.png'
					alt='Family of three'
				></img>
                <h6 className="card-text">
                    Let me tell you about a very special baby.

                    To make a baby you need sperm from a man and an egg from a woman. {character.parent1} and {character.parent2} used an egg from {character.donor1} and sperm from {character.donor}.  Nine months later my favorite baby was born.

                    Do you know the name of this baby?

                    It's you, {character.childname}!


                    
                    
                     </h6>
                
              </div>
            </div>
            
           
             ))}
        </div>               
        
    )

}


export default Doubledonor;
