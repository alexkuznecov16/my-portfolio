import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';

export default function Home() {
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
