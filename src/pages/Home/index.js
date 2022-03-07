import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';
import './styles.css';

import React from 'react';

const Home = () => {
	return (
		<div>
			<h1 id='heading-h1'>Our Story</h1>
      <div class='flex-container'>
      <div class='flex-photo'>
				<img
					src='https://images.unsplash.com/photo-1617080090911-91409e3496ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80'
					alt='Child hands making a heart'
				></img>
			</div>
        <div class='flex-text'>
				<h2>
					This website was created to allow parents to create and share their
					child's birth story. Families are a lot like ice cream--they come in
					many wonderful flavors! Let's create your family story. Click the 'Family Input button' above to get started, and then choose your flavor from the Narratives drop-down menu.
				</h2>
			</div>
        
      </div>
			
			
		</div>
	);
};

export default Home;
