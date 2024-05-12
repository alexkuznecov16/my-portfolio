import React from 'react';
import './About.css';
import Image from 'next/image';

export default function About() {
	return (
		<div id='about' className='About'>
			<h2 className='section--title'>About Me</h2>
			<div className='container'>
				<div className='About__inner'>
					<Image width={200} height={400} src={'/placeholder.webp'} alt="it's me"></Image>
					<div className='About--text'>
						<h3>Learn More About Me</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur. Nostrum vel quos non nihil, magnam delectus recusandae vitae eligendi. Fugiat sapiente deserunt atque eaque, ipsa natus accusamus cum necessitatibus!</p>
						<br />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dignissimos. Tenetur commodi eaque fuga, quod cum molestias quam minus laborum. Cum nam sunt quis harum nostrum cumque, ex adipisci at.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
