import React from 'react';
import './Footer.css';

import {FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='Footer'>
			<div className='container'>
				<div className='Footer__inner'>
					<div className='Footer--logo'>
						<h2>Alexander Kuznecov</h2>
						<div className='Footer__socials'>
							<Link target='_blank' href={'https://www.linkedin.com/in/alexander-kuznecov/'}>
								<FaLinkedin />
							</Link>
							<Link target='_blank' href={'https://t.me/kznws'}>
								<FaTelegram />
							</Link>
							<Link target='_blank' href={'https://github.com/alexkuznecov16'}>
								<FaGithub />
							</Link>
						</div>
					</div>
					<div className='Footer--text'>
						<span style={{color: '#4f81f3'}}>2024</span> copyright by Alexander Kuznecov
					</div>
				</div>
			</div>
		</footer>
	);
}
