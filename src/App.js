// 0223 5:05
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button, Navbar, Form } from 'react-bootstrap';
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Navbar from 'react-bootstrap/Navbar';
import Nav from './pages/Nav';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Smc from './pages/Smc';
import Doubledonor from './pages/Doubledonor';
import Donorsperm from './pages/Donorsperm';
import Donoregg from './pages/Donoregg';
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
				<Route path='characters' element={<Characters />} />
				<Route path='/' element={<Home />} />
				<Route path='smc' element={<Smc />} />
				<Route path='donorsperm' element={<Donorsperm />} />
				<Route path='donoregg' element={<Donoregg />} />
				<Route path='doubledonor' element={<Doubledonor />} />
			</Routes>
		</div>
	);
}

export default App;
