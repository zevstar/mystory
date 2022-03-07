import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Smc = () => {
    
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
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <h6 className="card-text">`The birth story of {character.childname} is a beautiful tale.  It involves the stories of both {character.parent1} and {character.parent2}.  Who both agreed that it was best for them to use {character.donor1} and {character.donor2} to assist them along their journey.` </h6>
                
              </div>
            </div>
            
           
             ))}
        </div>               
        
    )

}


export default Smc;
