import React from 'react';
import './Contact.css';
import Link from 'next/link';

export default function Contact() {
	return (
		<div data-aos='fade-up' id='contact' className='Contact'>
			<h2 className='section--title'>Contact</h2>
			<div className='container'>
				<div className='Contact__inner'>
					<div className='Contact--text'>
						<h4>Email</h4>
						<Link href={'mailto:alexander.kuznecov16@gmail.com'}>alexander.kuznecov16@gmail.com</Link>
						<h4>Github</h4>
						<Link href={'https://github.com/alexkuznecov16'}>alexkuznecov16</Link>
						<h4>LinkedIn</h4>
						<Link href={'https://www.linkedin.com/in/alexander-kuznecov/'}>Alexander Kuznecov</Link>
						<h4>Address</h4>
						<Link href={'https://www.google.com/maps/place/Jurmala/'}>European Union, Latvia, Jurmala</Link>
					</div>
					<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139196.5881805642!2d23.7221747!3d56.966845649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedd07e8a104d3%3A0x78537e586c6c16df!2z0K7RgNC80LDQu9Cw!5e0!3m2!1sru!2slv!4v1715515562148!5m2!1sru!2slv'></iframe>
				</div>
			</div>
		</div>
	);
}
