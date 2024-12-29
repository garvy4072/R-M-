/** @format */
import { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();
	return (
		<header>
			<div className='left d-flex '>
				<div
					className='logo'
					onClick={() => navigate('/')}>
					R&M
				</div>
				<ul className={`${open ? 'active ' : ''} d-flex `}>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>

					<li>
						<a href='#services'>services</a>
					</li>
				</ul>
			</div>
			<div className='right d-flex'>
				<button
					onClick={() => {
						navigate('/contact');
					}}>
					Let's Talk
				</button>
			</div>
		</header>
	);
}

export default Navbar;
