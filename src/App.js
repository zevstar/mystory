// 0223 
import { useEffect } from 'react';

import logo from './logo.svg';
import axios from 'axios';
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
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
