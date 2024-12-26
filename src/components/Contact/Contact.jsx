/** @format */

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
function Contact() {
	const navigate = useNavigate();
	const [state, handleSubmit] = useForm('mannqgna');
	useEffect(() => {
		if (state.succeeded) {
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
	});
	return (
		<div className='ff'>
			{state.succeeded ? (
				<div className='success'>
					<h2>
						Thank you for your message! this mail goes to our developer
						GARVYXXX.com email
					</h2>
					<p>Our team will get back to you soon.</p>
				</div>
			) : (
				<>
					<h1>Contact Us</h1>
					<div className='input-form'>
						<form
							onSubmit={handleSubmit}
							method='POST'>
							<div className='form-group'>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Name'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='Email'
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='number'
									id='phone'
									name='phone'
									placeholder='Phone'
									required
								/>
							</div>
							<div className='form-group'>
								<textarea
									id='message'
									name='message'
									placeholder='Message'
									rows={4}
									required></textarea>
							</div>
							<button
								type='submit'
								disabled={state.submitting}>
								Send
							</button>
						</form>
					</div>
				</>
			)}
		</div>
	);
}

export default Contact;
