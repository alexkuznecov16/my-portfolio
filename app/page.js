'use client';
import {useEffect, useState} from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Services from './Components/Services/Services';

export default function Home() {
	const [scrollProgress, setScrollProgress] = useState(0);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrolled = (scrollTop / scrollHeight) * 100;
		setScrollProgress(scrolled);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		Aos.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<>
			<div className='page-bar'>
				<div style={{width: scrollProgress + '%'}} className='page-scroll-bar'></div>
			</div>
			<Header />
			<Intro />
			<About />
			<Services />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</>
	);
}
