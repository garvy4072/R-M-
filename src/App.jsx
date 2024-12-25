/** @format */

import Loading from './components/utilities/Loading';
import './App.css';
import Navbar from './components/Header/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import { useEffect, useState } from 'react';

function App() {
	const [loading, setloading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setloading(false);
		}, 4000);
	}, []);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Navbar />
					<Hero />
					<Services />
				</>
			)}
		</>
	);
}

export default App;
