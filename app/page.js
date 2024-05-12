'use client';
import {useEffect} from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	useEffect(() => {
		Aos.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<>
			<Header />
			<Intro />
			<About />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</>
	);
}
