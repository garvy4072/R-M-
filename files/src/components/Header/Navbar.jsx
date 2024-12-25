/** @format */
import './Navbar.css';

function Navbar() {
	return (
		<header>
			<div className='left d-flex '>
				<div className='logo'>R&M</div>
				<ul className='d-flex '>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>

					<li>
						<a href='#services'>services</a>
					</li>
				</ul>
			</div>
			<div className='right d-flex'>
				<button>Let's Talk</button>
			</div>
		</header>
	);
}

export default Navbar;
