import React from 'react';
import './About.css';
import Image from 'next/image';

export default function About() {
	return (
		<div data-aos='fade-up' id='about' className='About'>
			<h2 className='section--title'>About Me</h2>
			<div className='container'>
				<div className='About__inner'>
					<Image width={200} height={400} src={'/me.png'} alt="it's me"></Image>
					<div className='About--text'>
						<h3>Learn More About Me</h3>
						<p>Since the summer of 2022 I do website development more professional. During this time I was complete course by Skillfactory to Frontend developer. During this course I recognized a lot of Frontend part and some of Backend part (work with Databases)</p>
						<br />
						<p>I am very enthusiastic about what I do and I am always ready to learn something new. I have a lot of ideas for creating new projects in the future and filling my portfolio with interesting materials.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
