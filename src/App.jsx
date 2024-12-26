/** @format */

import Loading from './components/utilities/Loading';
import './App.css';
import Navbar from './components/Header/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import { useEffect, useState } from 'react';
import About from './components/About/About';
import { Route, Router, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
function App() {
	const [loading, setloading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setloading(false);
		}, 4000);
	}, []);
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<>
							{loading ? (
								<Loading />
							) : (
								<>
									<Navbar />
									<Hero />
									<Services />
									<About />
									<Footer />
								</>
							)}
						</>
					}
				/>
				<Route
					path='/contact'
					element={
						<>
							<Navbar />
							<Contact />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
