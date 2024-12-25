/** @format */
import React, { useEffect, useState } from 'react';

import './Hero.css';
import Chart from 'chart.js/auto';
import { Bar, Line, Radar } from 'react-chartjs-2';
function Hero() {
	const [chartData, setChartData] = useState([10, 20, 30, 40]);
	const [chartData2, setChartData2] = useState([10, 20, 30, 40]);

	function getRandomnumber() {
		const f = Math.floor(Math.random() * 400);
		const s = Math.floor(Math.random() * 200);
		const w = Math.floor(Math.random() * 400);
		const wg = Math.floor(Math.random() * 300);
		const r = Math.floor(Math.random() * 900);
		const sy = Math.floor(Math.random() * 800);

		const t = Math.floor(Math.random() * 500);
		const fourth = Math.floor(Math.random() * 500);
		setChartData2([w, wg, r, sy]);
		setChartData([f, s, t, fourth]);
	}

	useEffect(() => {
		setInterval(() => {
			getRandomnumber();
		}, 5000);
		return () => {
			clearInterval();
		};
	}, []);
	console.log(chartData);
	return (
		<div className='hero'>
			<div className='text'>
				<h1>
					Hi Welcome
					<br /> To Our
				</h1>
				<h1>Reporting and Marketing Analysis</h1>
				<button>Contact Us</button>
			</div>
			<div className={'box'}>
				<Radar
					data={{
						labels: ['P1', 'P2', 'P3', 'P4'],
						datasets: [
							{
								label: 'market ',
								data: chartData,
								fill: true,
								backgroundColor: 'rgba(5, 83, 176, 0.8)',
								borderColor: 'rgb(255, 255, 255)',
								pointBackgroundColor: 'transparent',
								pointBorderColor: 'transparent',
								pointHoverBackgroundColor: 'transparent',
							},
							{
								label: 'analysis ',
								data: chartData2,
								fill: true,
								backgroundColor: 'rgba(78 , 165 ,215, 0.7)',
								borderColor: 'rgba(54, 162, 235, 1)',
								borderJoinStyle: 'miter',
								pointBackgroundColor: 'transparent',
								pointBorderColor: 'transparent',
								pointHoverBackgroundColor: 'transparent',
							},
						],
					}}
					options={{
						plugins: {
							tooltip: {
								enabled: false,
							},

							legend: {
								display: false,
							},
						},
						scales: {
							r: {
								pointLabels: {
									display: false,
								},
								grid: {
									drawTicks: false,
									drawBorder: false,
									circular: false,
									color: 'transparent',
								},
								angleLines: {
									display: true,
									color: 'rgba(218, 234, 247, 0.5)',
									borderDashOffset: 0,
								},
								ticks: {
									display: false,
								},
							},
						},
						elements: {
							line: {
								borderWidth: 0,
							},
						},
					}}
				/>
			</div>
		</div>
	);
}

export default Hero;
