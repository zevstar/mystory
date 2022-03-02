// 0223 
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button, Navbar, Form } from 'react-bootstrap'
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Navbar from 'react-bootstrap/Navbar';
import Nav from './pages/Nav';
import Characters from './pages/Characters';
import './App.css';

function App() {
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/api/v1/allchildnames'
			);
			console.log(response);

		} catch (err) {

			console.log(err);
		}
	};

	return (
		<div>
      <Nav />
      <Routes>
        <Route path = 'characters' element = {<Characters />}/>
      </Routes>
		</div>
	);
}

export default App;
