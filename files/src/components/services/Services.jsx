/** @format */
import React from 'react';
import './Services.css';

function Services() {
	return (
		<div
			id='services'
			className='Services'>
			<h1>Our Services</h1>
			<div className='services-container'>
				<div className='services-box'>
					<div className='service'>
						<h4>
							Investigate Reporting <br /> WorkShop
						</h4>
						<hr />
						<div className='btn'>
							<button
								onClick={() => {
									alert('Under Proccess');
								}}>
								Learn More
							</button>
						</div>
					</div>
				</div>
				<div className='services-box'>
					<div className='service'>
						<h4>Breaking News Discussion</h4>
						<hr />
						<div className='btn'>
							<button
								onClick={() => {
									alert('Under Proccess');
								}}>
								Learn More
							</button>
						</div>
					</div>
				</div>
				<div className='services-box'>
					<div className='service'>
						<h4>Weekly News Analyse</h4>
						<hr />
						<div className='btn'>
							<button
								onClick={() => {
									alert('Under Proccess');
								}}>
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
