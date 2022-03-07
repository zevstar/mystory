import { Link } from 'react-router-dom';


const Nav = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				{/* <Link className='navbar-brand' to='characters' href='#'>
					Navbar
				</Link> */}
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/' href='#'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='characters' href='#'>
								Character Form
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								className='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
								to='smcstory'
							>
								Narratives
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='smc' href='#'>
										SMC
									</Link>
								</li>
									<hr className='dropdown-divider'></hr>
								<li>
									<Link className='dropdown-item' to='donorsperm' href='#'>
										Donor Sperm 
									</Link>
								</li>
								<li>
									<hr className='dropdown-divider'></hr>
								</li>
								<li>
									<Link className='dropdown-item' to = 'donoregg' href='#'>
										Donor Egg
									</Link>
								</li>
								<li>
									<hr className='dropdown-divider'></hr>
								</li>
								<li>
									<Link className='dropdown-item' to = 'doubledonor' href='#'>
										Double Donor
									</Link>
								</li>
							</ul>
						</li>
						{/* <li className='nav-item'>
							<Link className='nav-link' to='doubledonor'>SomthingMore</Link>
						</li> */}
					</ul>
					{/* <form className='d-flex'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/> */}
						{/* <button className='btn btn-outline-success' type='submit'>
							Search
						</button> */}
					{/* </form> */}
				</div>
			</div>
		 </nav>
	);
};

export default Nav;
