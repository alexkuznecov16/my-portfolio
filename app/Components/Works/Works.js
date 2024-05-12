import React from 'react';
import './Works.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Works() {
	const worksData = [
		{
			name: 'Football Club',
			link: 'https://github.com/alexkuznecov16/football-club',
			img: '/fk-spartak.svg',
		},
		{
			name: 'Kanban board',
			link: 'https://github.com/alexkuznecov16/kanban-board',
			img: '/kanban.svg',
		},
		{
			name: 'Luis Oenrique',
			link: 'https://github.com/alexkuznecov16/Luis-Oenrique',
			img: '/luis.svg',
		},
		{
			name: 'Airline tickets',
			link: 'https://github.com/alexkuznecov16/aviasales',
			img: '/airline-sales.svg',
		},
		{
			name: 'Quiz',
			link: 'https://github.com/alexkuznecov16/SimpleQuiz',
			img: '/quiz.svg',
		},
		{
			name: 'Weather',
			link: 'https://github.com/alexkuznecov16/weather-app',
			img: '/weather.svg',
		},
		{
			name: 'Calculator',
			link: 'https://github.com/alexkuznecov16/SimpleCalculatorReact',
			img: '/calculator.svg',
		},
	];
	return (
		<div id='works' className='Works'>
			<h2 className='section--title'>Works</h2>
			<div className='container'>
				<div className='Works__inner'>
					{worksData.map((item, index) => (
						<div key={index} className='Works--item'>
							<Image width={200} height={150} src={item.img} alt='work image'></Image>
							<div className='item__link'>
								<Link target='_blank' href={item.link}>
									{item.name}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
